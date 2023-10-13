import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const allAuthors = async (_req: Request, res: Response) => {
  try {
    const authors = await prisma.author.findMany({
      include: {
        books: true,
      },
    });
    res.status(200).json(authors);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const createAuthor = async (req: Request, res: Response) => {
  try {
    const author = req.body;
    await prisma.author.create({
      data: author,
    });
    res.status(200).json(author);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Something went wrong" });
  }
};
