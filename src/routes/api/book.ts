import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const allBooks = async (_req: Request, res: Response) => {
  try {
    const books = await prisma.book.findMany({
      include: {
        author: true,
        categories: true,
      },
    });
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const createBook = async (req: Request, res: Response) => {
  try {
    const book = req.body;
    await prisma.book.create({
      data: book,
    });
    res.status(200).json(book);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const book = await prisma.book.update({
      where: {
        id,
      },
      data,
    });
    res.status(200).json(book);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const books = await prisma.book.delete({
      where: {
        id,
      },
    });
    res.status(200).json(books);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Something went wrong" });
  }
};
