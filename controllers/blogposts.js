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
  const { skip, take } = req.query;
  try {
    const blog = await blogposts.findMany({
      where: {
        published: false,
      },
      skip: +skip || undefined,
      take: +take || undefined,
    });

    res.status("200").json(blog);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "not found any" });
  }
});

// @route   GET api/blogposts/:slug
// @desc    find a blogpost from the slug
// @access  Public
router.get("/:slug", async (req, res) => {
  const { slug } = req.params;
  try {
    const blog = await blogposts.findMany({
      where: {
        published: false,
        slug,
      },
    });
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
        author: {
          connect: {
            id: "91296147-dc68-43e0-968a-55c118c2a3ef",
          },
        },
      },
    });

    res.status(200).json({ blogpost: blog, status: "created" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "Error - not created" });
  }
});

// @route   POST api/blogposts/update/:postId
// @desc    update a blogpost
// @access  Public
router.patch("/update/:postId", updateBlogpost, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

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
    authorId,
  } = req.body;

  try {
    // const curr_blogpost = await blogposts.findUnique({
    //   select: {
    //     title: true,
    //     slug: true,
    //     metaDescription: true,
    //     excerpt: true,
    //     content: true,
    //     banner: true,
    //     banneralt: true,
    //     minuteRead: true,
    //     featured: true,
    //     topPick: true,
    //     date: true,
    //     authorId: true,
    //   },
    //   where: {
    //     id: postId,
    //   },
    // });

    // console.log("current post", curr_blogpost);
    const updated_post = await blogposts.update({
      where: {
        id: postId,
      },
      data: {
        // title: title === undefined ? curr_blogpost.title : title,
        // slug: slug === undefined ? curr_blogpost.slug : slug,
        // excerpt: excerpt === undefined ? curr_blogpost.excerpt : excerpt,
        // content: content === undefined ? curr_blogpost.content : content,
        // featured: featured === undefined ? curr_blogpost.featured : featured,
        // topPick: topPick === undefined ? curr_blogpost.topPick : topPick,
        // date: date === undefined ? curr_blogpost.date : date,
        // banner: banner === undefined ? curr_blogpost.banner : banner,
        // banneralt:
        //   banneralt === undefined ? curr_blogpost.banneralt : banneralt,
        // metaDescription:
        //   metaDescription === undefined
        //     ? curr_blogpost.metaDescription
        //     : metaDescription,
        // minuteRead:
        //   minuteRead === undefined ? curr_blogpost.minuteRead : minuteRead,
        // upadted_at: new Date().toISOString(),
        // authorId: authorId === undefined ? curr_blogpost.authorId : authorId,
        ...req.body,
      },
    });
    res.status(200).json({ blogpost: updated_post, msg: "updated" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ blogpost: null, msg: "Server Error" });
  }
});

// @route   POST api/blogposts/publish/:postId
// @desc    update a blogpost
// @access  Public
router.patch("/publish/:postId", async (req, res) => {
  const { postId } = req.params;

  try {
    const blogpost = await blogposts.findUnique({
      select: {
        title: true,
        slug: true,
        metaDescription: true,
        excerpt: true,
        content: true,
        banner: true,
        banneralt: true,
        minuteRead: true,
        date: true,
        author,
      },
      where: {
        id: postId,
      },
    });
    console.log(blogpost);
    res.status(200).send("💯");
  } catch (err) {
    console.log(err);
    res.status(500).json({ blogpost: null, msg: "Server Error" });
  }
});

export default router;
