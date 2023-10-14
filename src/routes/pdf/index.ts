import { Router, Request, Response } from "express";

const router = Router();

router.get("/:isbn", async (req: Request, res: Response) => {
  try {
    const { isbn } = req.params;
    const options = {
      root: "public",
    };
    res.sendFile(`${isbn}.pdf`, options);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
