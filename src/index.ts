import cors from "cors";
import express, { Express } from "express";
import apiRouter from "./routes/api/provider";
import pdfRouter from "./routes/pdf/provider";
import authRouter from "./routes/auth/provider";
import * as dotenv from "dotenv";

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

app.listen(app.get("port"), () => {
  console.log(`Server running on port ${app.get("port")}`);
});
