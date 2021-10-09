const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const app = express();

// init middleware
app.use(express.json({ extended: false }));
app.use(cors());

// define routes
app.use("/api/blogposts", require("./routes/api/blogposts"))

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
