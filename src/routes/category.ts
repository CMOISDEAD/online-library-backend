import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const allCategories = async (_req: Request, res: Response) => {
  const categories = await prisma.category.findMany({
    include: {
      books: true,
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
