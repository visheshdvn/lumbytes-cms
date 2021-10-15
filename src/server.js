// const express = require("express");
import express from "express";
import path from "path";
import cors from "cors";
require("dotenv").config();
// custom components
import renderer from "./helpers/renderer";

const app = express();
// init middleware
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

// define routes
app.get("/", (req, res, next) => {
  res.status(200).send(renderer());
});

app.use("/api/blogposts", require("../routes/api/blogposts"));

app.use((req, res) => {
  res.status(404).json({ status: "404 - not found" });
});

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
