import { Router, Request, Response } from "express";

const router = Router();

router.get("/:isbn", async (req: Request, res: Response) => {
  const { isbn } = req.params;
  const options = {
    root: "public",
  };
  res.sendFile(`${isbn}.pdf`, options, (err) => {
    if (!err) return res.status(200);
    res.status(404).json({ message: "File not found" });
  });
});

export default router;
