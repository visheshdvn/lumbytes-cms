// TODO
// change published: false to true in router.get "/"

import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { validationResult } from "express-validator";
// validator imports
import { createBlogpost } from "../validators/blogposts";

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
  console.log("body - ", req.body);
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

    console.log(blog);

    res.status(200).json({ blogpost: blog, status: "created" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "Error - not created" });
  }
});

export default router;
