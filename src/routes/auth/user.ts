import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

// login a user
export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });
  if (!user) return res.status(404).json({ error: "User not found" });
  if (user.password !== password)
    return res.status(401).json({ error: "Invalid password" });
  res.status(200).json(user);
};

// register a new user
export const register = async (req: Request, res: Response) => {
  const data = req.body;
  const exist = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });
  if (exist) return res.status(409).json({ error: "User already exists" });
  const user = await prisma.user.create({ data });
  res.status(200).json(user);
};

// recover a user by email
export const recover = async (req: Request, res: Response) => {
  const { email } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) return res.status(404).json({ error: "User not found" });
  res.status(200).json(user);
};
