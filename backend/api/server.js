import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import conversationRoute from "./routes/conversation.route.js";
import gigRoute from "./routes/gig.route.js";
import messageRoute from "./routes/message.route.js";
import orderRoute from "./routes/order.route.js";
import reviewRoute from "./routes/review.route.js";

//initiate express
const app = express();
//port number
const PORT = 8800;

dotenv.config();
mongoose.set("strictQuery", true);

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    console.log(error);
  }
};

//routes
app.get("/", (req, res) => {
  res.send("Home page");
});

app.use("/api/user", userRoute);
app.use("/api/conversation", conversationRoute);
app.use("/api/gig", gigRoute);
app.use("/api/message", messageRoute);
app.use("/api/order", orderRoute);
app.use("/api/review", reviewRoute);

//server listens
app.listen(PORT, () => {
  connection();
  console.log(`App listens on port ${PORT}`);
});
