import { PrismaClient } from "@prisma/client";
import { render } from "@react-email/render";
import { Request, Response } from "express";
import { sendEmail } from "../../services/emails";
import { Billing } from "../../services/emails/templates/Billing";

const prisma = new PrismaClient();

export const allBillings = async (req: Request, res: Response) => {
  try {
    const billings = await prisma.billing.findMany({
      include: {
        user: true,
        books: true,
      },
    });
    res.status(200).json(billings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const getBilling = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const billing = await prisma.billing.findUnique({
      where: {
        id: id,
      },
      include: {
        user: true,
        books: true,
      },
    });
    res.status(200).json(billing);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const saveBilling = async (req: Request, res: Response) => {
  try {
    const { userId, data } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) return res.status(404).json({ error: "User not found" });
    const billing = await prisma.billing.create({
      data: {
        ...data,
        books: {
          connect: data.books.map((book: any) => ({ id: book.id })),
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
      include: {
        books: {
          include: {
            author: true,
          },
        },
        user: true,
      },
    });
    const html = render(Billing({ user, billing }));
    sendEmail(user.email, "Billing", html);
    res.status(200).json(billing);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
