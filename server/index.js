import express from "express";
import cors from "cors";
import "./config/dotenv.js";
// import 'express-async-errors'
import bookData from "./api/bookData.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/books", bookData);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
