import cors from "cors";
import * as dotenv from "dotenv";
import express, { Express } from "express";
import serverless from "serverless-http";
import apiRouter from "../../src/routes/api/provider";
import pdfRouter from "../../src//routes/pdf/provider";
import authRouter from "../../src//routes/auth/provider";

dotenv.config();

const app: Express = express();

app.set("port", process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(cors());

app.use("/api", apiRouter);
app.use("/pdf", pdfRouter);
app.use("/auth", authRouter);

export const handler = serverless(app);
