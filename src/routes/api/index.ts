import { Router } from "express";
import { allBooks, createBook, deleteBook, getBook } from "./book";
import { allAuthors, createAuthor } from "./author";
import { allCategories, createCategory } from "./category";
import { addRecent, getUser, updatePhoto, updateUser } from "./user";

const router = Router();

router.get("/book", allBooks);
router.get("/book/:id", getBook);
router.post("/book", createBook);
router.delete("/book/:id", deleteBook);

router.get("/author", allAuthors);
router.post("/author", createAuthor);

router.get("/category", allCategories);
router.post("/category", createCategory);

// router.get("/user", allUsers);
router.get("/user/:id", getUser);
router.post("/addRecent", addRecent);
router.put("/updateUser", updateUser);
router.post("/updatePhoto", updatePhoto);

export default router;
