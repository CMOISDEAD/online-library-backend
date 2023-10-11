import cors from "cors";
import express, { Express } from "express";
import router from "./routes/api";
import pdfRouter from "./routes/pdf";
import authRouter from "./routes/auth";
import * as dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.set("port", process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(cors());

app.use("/api", router);
app.use("/pdf", pdfRouter);
app.use("/auth", authRouter);

app.listen(app.get("port"), () => {
  console.log(`Server running on port ${app.get("port")}`);
});
