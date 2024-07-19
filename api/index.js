import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});

app.use("/api/user", userRouter);
