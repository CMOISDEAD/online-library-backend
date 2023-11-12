import cors from "cors";
import express, { Express } from "express";
import authRouter from "../src/routes/auth/provider";
import * as dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.set("port", process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static("public"));
app.use(cors());

app.use("/auth", authRouter);

export default app;
