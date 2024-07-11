import express from "express";
import "dotenv/config";
import axios from "axios";

const app = express();

app.get("/todo", async (req, res, next) => {
  const todo = await axios.get("https://dummyjson.com/todos");
  res.json(todo.data);
});

app.listen(3000, () => {
  console.log("Server Started");
});
