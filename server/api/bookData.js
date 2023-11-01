import express from "express";
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

router.get("/categories", async (req, res) => {
  let collection = await db.collection("book_data");
  let results = await collection.distinct("categories");
  if (results) {
    res.send(results).status(200);
  } else res.send("NOT FOUND").status(400);
});

router.get("/category/:category", async (req, res) => {
  let category = req.params.category;
  let collection = await db.collection("book_data");
  let results = await collection.find({ categories: category }).toArray();

  if (results) {
    res.send(results).status(200);
  } else res.send("NOT FOUND").status(400);
});

export default router;
