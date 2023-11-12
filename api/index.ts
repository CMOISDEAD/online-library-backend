import cors from "cors";
import express, { Express } from "express";
import apiRouter from "../src/routes/api/provider";
import * as dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.set("port", process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(cors());

app.use("/api", apiRouter);

export default app;
