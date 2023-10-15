import { Router } from "express";
import { allAuthors, createAuthor } from "./author";
import { allBooks, createBook, deleteBook, getBook } from "./book";
import { allCategories, createCategory, deleteCategory } from "./category";
import {
  addFavorite,
  addRecent,
  deleteUser,
  getUser,
  updatePhoto,
  updateUser,
} from "./user";

const router = Router();

router.get("/book", allBooks);
router.get("/book/:id", getBook);
router.post("/book", createBook);
router.delete("/book/:id", deleteBook);

router.get("/author", allAuthors);
router.post("/author", createAuthor);

router.get("/category", allCategories);
router.post("/category", createCategory);
router.delete("/category/:id", deleteCategory);

router.get("/user/:id", getUser);
router.post("/addRecent", addRecent);
router.post("/addFavorite", addFavorite);
router.post("/updatePhoto", updatePhoto);
router.put("/updateUser", updateUser);
router.delete("/deleteUser", deleteUser);

export default router;
