import express from "express";
import { connectDB } from './database/index.js';

import documentRoutes from './routes/documentRoutes.js';

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is the WI Writer backend/API.");
});

app.use("/api", documentRoutes);

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});