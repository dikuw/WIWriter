import express from "express";
import { connectDB } from './database/index.js';

const app = express();

app.get("/", (req, res) => {
  res.send("This is the WI Writer backend/API.");
});

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});