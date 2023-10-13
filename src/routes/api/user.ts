import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { mapUser } from "../../util/mapuser";

const prisma = new PrismaClient();

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        recent: true,
        favorites: true,
      },
    });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const addRecent = async (req: Request, res: Response) => {
  try {
    const { userId, bookId } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) return res.status(404).json({ error: "User not found" });
    if (user.recentIDs.includes(bookId)) return res.status(200).json(user);
    const newUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        recentIDs: {
          push: bookId,
        },
      },
    });
    res.status(200).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const addFavorite = async (req: Request, res: Response) => { };

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const data = mapUser(req.body);
    const user = await prisma.user.update({
      where: {
        id,
      },
      data,
      include: {
        recent: true,
        favorites: true,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.user.delete({
      where: {
        id,
      },
    });
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
