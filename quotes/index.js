import express from "express";
import "dotenv/config";
import axios from "axios";

const app = express();

app.get("/quotes", async (req, res, next) => {
  const { data } = await axios.get("https://dummyjson.com/quotes");
  res.json(data);
});

app.listen(3002, (req, res, next) => {
  console.log("Server Quote Started");
});
