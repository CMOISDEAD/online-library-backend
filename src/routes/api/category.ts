import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const allCategories = async (_req: Request, res: Response) => {
  const categories = await prisma.category.findMany({
    include: {
      books: true
    },
  });
  res.status(200).json(categories);
};

export const createCategory = async (req: Request, res: Response) => {
  const category = req.body;
  await prisma.category.create({
    data: category,
  });
  res.status(200).json(category);
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const category = await prisma.category.update({
      where: {
        id,
      },
      data,
    });
    res.status(200).json(category);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.category.delete({
      where: {
        id,
      },
    });
    res.status(200).json({ message: "Category deleted" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Something went wrong" });
  }
};
