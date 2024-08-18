import { Request, Response } from "express";
import express from "express";
import dotenv from "dotenv";
import connectMongoDB from "./configs/mongo";
import redisClient from "./configs/redis";
import { Server as SocketIOServer } from "socket.io";
import http from "http";
import User from "./models/User";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

connectMongoDB();
redisClient.on("connect", () => {
  console.log("Redis client connected");
});

const server = http.createServer(app);
const io = new SocketIOServer(server);

app.use(express.json());

io.on("connection", (socket) => {
  socket.on("updateStatus", async (status) => {
    // Handle user status updates
    const user = await User.findOne({ socketId: socket.id });
    if (user) {
      user.status = status;
      await user.save();
      io.emit("statusUpdate", { userId: user._id, status });
    }
  });

  socket.on("disconnect", async () => {
    console.log(`User disconnected: ${socket.id}`);
    const user = await User.findOne({ socketId: socket.id });
    if (user) {
      user.status = "offline";
      await user.save();
      io.emit("statusUpdate", { userId: user._id, status: "offline" });
    }
  });
});

app.use("/api/auth", (req: Request, res: Response) => {
  res.json({ from: "auth" });
});
app.use("/api/users", (req: Request, res: Response) => {
  res.json({ from: "users" });
});
app.use("/api/servers", (req: Request, res: Response) => {
  res.json({ from: "servers" });
});

server.listen(port, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
