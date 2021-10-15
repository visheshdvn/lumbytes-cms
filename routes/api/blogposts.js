const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const { author, blogposts } = new PrismaClient();

// @route   GET api/blogposts
// @desc    get all blogposts
// @access  Public
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


// @route   POST api/blogposts/create
// @desc    create a blogpost
// @access  Public
router.post("/create", async (req, res) => {
  console.log(req.body);
  res.status(200).json({status: "created"})
})