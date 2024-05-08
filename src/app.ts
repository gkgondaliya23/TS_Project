import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
dotenv.config();
const app = express();
const port: Number = Number(process.env.PORT);
const dbUrl: string = process.env.MONGO_DBURL as string;
const imagePath : string = path.join(__dirname, 'images');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/src/images', express.static(imagePath));

app.get("/", (req: Request, res: Response) => {
  res.send(`Welcome to Express server...`);
});

import appRoutes from "./routes/index.routes";
app.use("/api/app", appRoutes);

app.listen(port, async () => {
  await mongoose
    .connect(dbUrl)
    .then(() => console.log(`DB is Connected!!!!`))
    .catch((err) => console.log(err));
  console.log(`Server is start at http://localhost:${port}`);
});
