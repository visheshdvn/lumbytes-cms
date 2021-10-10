const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const { author, blogposts } = new PrismaClient();

router.get("/", (req, res) => {
  // blogposts.findMany()
  res.status("200").send("Hello");
});

module.exports = router;
