const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const { author, blogposts } = new PrismaClient();

router.get("/", async (req, res) => {
  const blog = await blogposts.findMany({
    select: {
      content: true,
    },
  });
  console.log(blog);
  res.status("200").send("Hello");
});

module.exports = router;
