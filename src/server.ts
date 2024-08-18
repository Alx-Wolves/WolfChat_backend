import express, { Request, Response } from "express";
import dotenv from "dotenv";
import connectMongoDB from "./configs/mongo";
import redisClient from "./configs/redis";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

connectMongoDB();

redisClient.on("connect", () => {
  console.log("Redis client connected");
});

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
