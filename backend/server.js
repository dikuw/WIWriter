import express from 'express';
import cors from 'cors';
import { connectDB } from './database/index.js';

import documentRoutes from './routes/documentRoutes.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is the WI Writer backend/API.");
});

//  enable CORS for all origins to allow development with local server
app.use(cors({credentials: true, origin: process.env.ORIGIN}));

app.use("/api", documentRoutes);;

app.listen(port, () => {
  connectDB();
  console.log(`Server started at http://localhost:${port}`);
});