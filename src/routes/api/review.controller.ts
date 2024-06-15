import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await prisma.review.findMany();
    res.status(200).json(reviews);
  } catch (error) {
    console.log(error);
    res.status(500).json("Error creating review");
  }
};

export const getReview = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const review = await prisma.review.findMany({
      where: {
        bookId: id,
      },
      include: {
        user: true,
      },
    });
    if (!review) return res.status(404).json({ error: "Review not found" });
    res.status(200).json(review);
  } catch (error) {
    console.log(error);
    res.status(500).json("Error creating review");
  }
};

export const createReview = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    await prisma.review.create({
      data: data,
    });
    const reviews = await prisma.review.findMany({
      where: {
        bookId: data.bookId,
      },
      include: {
        user: true,
      },
    });
    res.status(200).json(reviews);
  } catch (error) {
    console.log(error);
    res.status(500).json("Error creating review");
  }
};
