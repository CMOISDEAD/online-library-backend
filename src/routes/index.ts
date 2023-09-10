import { Router } from "express";
import { allBooks, createBook } from "./book";
import { allAuthors, createAuthor } from "./author";
import { allCategories, createCategory } from "./category";

const router = Router();

router.get("/book", allBooks);
router.post("/book", createBook);

router.get("/author", allAuthors);
router.post("/author", createAuthor);

router.get("/category", allCategories);
router.post("/category", createCategory);

export default router;
