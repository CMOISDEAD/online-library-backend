import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const allAuthors = async (_req: Request, res: Response) => {
  const authors = await prisma.author.findMany({
    include: {
      books: true,
    },
  });
  res.status(200).json(authors);
};

export const createAuthor = async (req: Request, res: Response) => {
  const author = req.body;
  await prisma.author.create({
    data: author,
  });
  res.status(200).json(author);
};
