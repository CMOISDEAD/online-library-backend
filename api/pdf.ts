import cors from "cors";
import express, { Express } from "express";
import pdfRouter from "../src/routes/pdf/provider";
import * as dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.set("port", process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static("public"));
app.use(cors());

app.use("/pdf", pdfRouter);

export default app;
