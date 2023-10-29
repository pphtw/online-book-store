import express, { query } from "express";
import db from "../config/database.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
  let page = parseInt(req.query.page) - 1 || 0;
  let pageSize = parseInt(req.query.pageSize) || 10;
  let collection = await db.collection("book_data");
  let results = await collection
    .find({})
    .sort({ title: 1 })
    .limit(pageSize)
    .skip(page)
    .toArray();

  if (results) {
    res.send(results).status(200);
  } else res.send("NOT FOUND").status(400);
});

export default router;
