import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

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

//server listens
app.listen(PORT, () => {
  connection();
  console.log(`App listens on port ${PORT}`);
});
