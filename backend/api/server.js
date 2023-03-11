import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import conversationRoute from "./routes/conversation.route.js";
import gigRoute from "./routes/gig.route.js";
import messageRoute from "./routes/message.route.js";
import orderRoute from "./routes/order.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

//initiate express
const app = express();

dotenv.config();
mongoose.set("strictQuery", true);

const source = process.env.MONGO_URL;

console.log("Doing backend stuffs");
console.log(process.env.MONGO_URL);

const connection = async () => {
  try {
    await mongoose.connect(source);
  } catch (error) {
    console.log(error);
  }
};

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/conversation", conversationRoute);
app.use("/api/gig", gigRoute);
app.use("/api/message", messageRoute);
app.use("/api/order", orderRoute);
app.use("/api/review", reviewRoute);

//server listens
app.listen(8000, () => {
  connection();
  console.log(`App listens on port 8000`);
});
