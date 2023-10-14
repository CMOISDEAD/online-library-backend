import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { render } from "@react-email/render";
import { sendEmail } from "../../services/emails";
import Register from "../../services/emails/templates/Register";
import RecentLogin from "../../services/emails/templates/RecentLogin";
import BuyMembership from "../../services/emails/templates/BuyMembership";
import { comparition, encrypt } from "../../services/crypt";

const prisma = new PrismaClient();

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
    include: {
      recent: true,
      favorites: true,
    },
  });
  if (!user) return res.status(404).json({ error: "User not found" });
  if ((await comparition(password, user.password)) === false)
    return res.status(401).json({ error: "Invalid password" });
  const html = render(RecentLogin({ url: "", username: user.username }));
  sendEmail(user.email, "Recent Login", html);
  res.status(200).json(user);
};

export const register = async (req: Request, res: Response) => {
  const data = req.body;
  const exist = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });
  if (exist) return res.status(409).json({ error: "User already exists" });
  data.password = await encrypt(data.password);
  const user = await prisma.user.create({ data });
  const html = render(Register({ url: "", username: user.username }));
  sendEmail(user.email, "Welcome to Online Library", html);
  res.status(200).json(user);
};

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

export const buyMembership = async (req: Request, res: Response) => {
  const { id } = req.body;
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      membership: true,
    },
    include: {
      recent: true,
      favorites: true,
    },
  });
  const html = render(BuyMembership({ url: "", username: user.username }));
  sendEmail(user.email, "Thanks for buy a membership", html);
  res.status(200).json(user);
};
