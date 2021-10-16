// TODO
// change published: false to true in router.get "/"

import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { validationResult } from "express-validator";
// validator imports
import { createBlogpost, updateBlogpost } from "../validators/blogposts";

const router = Router();
const { blogposts, testdb } = new PrismaClient();

// @route   GET api/blogposts
// @desc    get all published blogposts
// @access  Public
router.get("/", async (req, res) => {
  try {
    const blog = await blogposts.findMany({
      where: {
        published: false,
      },
    });
    console.log(blog);
    res.status("200").json(blog);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "not found any" });
  }
});

// @route   POST api/blogposts/create
// @desc    create a blogpost
// @access  Public
router.post("/create", createBlogpost, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    title,
    slug,
    metaDescription,
    excerpt,
    content,
    banner,
    banneralt,
    minuteRead,
    featured,
    topPick,
    date,
  } = req.body;
  try {
    const blog = await blogposts.create({
      data: {
        title,
        slug,
        metaDescription,
        excerpt,
        content,
        banner,
        banneralt,
        minuteRead,
        featured,
        topPick,
        date,
        created_at: new Date().toISOString(),
        upadted_at: new Date().toISOString(),
        published: false,
      },
    });

    res.status(200).json({ blogpost: blog, status: "created" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "Error - not created" });
  }
});

// @route   POST api/blogposts/create
// @desc    create a blogpost
// @access  Public
router.patch("/:postId", updateBlogpost, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // console.log(req.body);
  const { postId } = req.params;
  const {
    title,
    slug,
    metaDescription,
    excerpt,
    content,
    banner,
    banneralt,
    minuteRead,
    featured,
    topPick,
    date,
  } = req.body;

  const blogpost = await blogposts.findMany({
    where: {
      id: postId,
    },
  });
  console.log(blogpost);
  res.status(200).send("got here");
});

export default router;
