import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({}));

app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.get("/api", (req: Request, res: Response) => {
  res.status(200).json({ message: "Express Home" });
});

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
});

app.listen(7000, () => {
  console.log("server is running on localhost:7000");
});
