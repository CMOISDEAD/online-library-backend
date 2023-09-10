import express, { Express } from "express";
import cors from "cors";
import router from "./routes";

const app: Express = express();

app.set("port", process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(router);

app.listen(app.get("port"), () => {
  console.log(`Server running on port ${app.get("port")}`);
});
