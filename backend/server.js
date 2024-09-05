import express from "express";
import { connectDB } from './database/index.js';

import Document from './models/Document.js';

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is the WI Writer backend/API.");
});

app.post("/addDocument", async (req, res) => {
  const document = req.body;
  const newDocument = new Document(document);
  try {
    await newDocument.save();
    res.status(201).json({ success: true, data: newDocument });
  } catch(error) {
    console.error("Error in add document:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
})

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});