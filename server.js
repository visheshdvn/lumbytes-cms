const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
const app = express();

// init middleware
app.use(express.json({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
// client
// const clientPath = path.join(__dirname, "client")
// app.use(express.static(clientPath));

// define routes
// app.get("/", (req, res, next) => {
// console.log(res);
// next();
// res.status(200).send("<h1>Hello!</h1>")
// res.sendFile(path.join(clientPath, ".next", "server", "pages", "index.html"))
// });

app.use("/api/blogposts", require("./routes/api/blogposts"));

app.use((req, res) => {
  res.status(404).json({ status: "404 - not found" });
});

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
