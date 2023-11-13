import { Router, Request, Response } from "express";

const router = Router();

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const options = {
      root: "public",
    };
    res.sendFile(id, options);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
