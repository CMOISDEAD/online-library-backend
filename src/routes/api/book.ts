import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const allBooks = async (_req: Request, res: Response) => {
  const books = await prisma.book.findMany({
    include: {
      author: true,
      categories: true,
    },
  });
  res.status(200).json(books);
};

export const createBook = async (req: Request, res: Response) => {
  const book = req.body;
  await prisma.book.create({
    data: book,
  });
  res.status(200).json(book);
};
