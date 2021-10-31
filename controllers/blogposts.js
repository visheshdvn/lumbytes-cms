// all APIs
// get all blogposts - features: pagination, sorting
// get similar blogposts to a blopost
// get blogposts of a specific tag

// TODO
// change published: false to true in router.get "/"

import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { validationResult } from "express-validator";
// validator imports
import { createBlogpost, updateBlogpost } from "../validators/blogposts";

const router = Router();
const { blogposts } = new PrismaClient();

// @route   GET api/blogposts
// @desc    get all published blogposts
// @access  Public
router.get("/", async (req, res) => {
  console.log(req.query);
  let { skip, take, _select, _where } = req.query;

  if (typeof _select === "string") {
    _select = [_select]
  } else if (!Array.isArray(_select)) {
    _select = null
  }

  try {
    const blog = await blogposts.findMany({
      select: {
        id: true,
        slug: true,
        title: true,
        excerpt: _select && Array.isArray(_select) ? _select.includes("excerpt") ? true : false : true,
        metaDescription: _select && Array.isArray(_select) ? _select.includes("metaDescription") ? true : false : true,
        content: _select && Array.isArray(_select) ? _select.includes("content") ? true : false : true,
        banner: _select && Array.isArray(_select) ? _select.includes("banner") ? true : false : true,
        banneralt: _select && Array.isArray(_select) ? _select.includes("banneralt") ? true : false : true,
        minuteRead: _select && Array.isArray(_select) ? _select.includes("minuteRead") ? true : false : true,
        featured: _select && Array.isArray(_select) ? _select.includes("featured") ? true : false : true,
        topPick: _select && Array.isArray(_select) ? _select.includes("topPick") ? true : false : true,
        date: _select && Array.isArray(_select) ? _select.includes("date") ? true : false : true,
        tags: _select && Array.isArray(_select) ? _select.includes("tags") ? {
          select: {
            tagname: true,
            color: true
          },
          where: {
            published: true
          },
        } : false : {
          select: {
            tagname: true,
            color: true
          },
          where: {
            published: true
          }
        },
        author: true,
      },
      where: {
        published: false,
        id: _where && _where.id ? +_where.id || undefined : undefined,
        slug: _where && _where.slug ? encodeURIComponent(_where.slug) : undefined,
        featured: _where && _where.featured ? _where.featured === "true" : undefined,
        tags: _where && _where.tags ? { some: {OR: _where.tags, published: true} } : undefined
      },
      skip: +skip || undefined,
      take: +take || undefined,
      orderBy: {
        id: "desc"
      },
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

  BigInt.prototype.toJSON = function () {
    return Number(this);
  };

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
            id: "a76d58a6-3de5-4077-8b29-1c3e70fa17ff",
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
router.put("/update/:postId", updateBlogpost, async (req, res) => {
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
    const curr_blogpost = await blogposts.findUnique({
      select: {
        title: true,
        slug: true,
        metaDescription: true,
        excerpt: true,
        content: true,
        banner: true,
        banneralt: true,
        minuteRead: true,
        featured: true,
        topPick: true,
        date: true,
        authorId: true,
      },
      where: {
        id: postId,
      },
    });

    // console.log("current post", curr_blogpost);
    const updated_post = await blogposts.update({
      where: {
        id: postId,
      },
      data: {
        title: title === undefined ? curr_blogpost.title : title,
        slug: slug === undefined ? curr_blogpost.slug : slug,
        excerpt: excerpt === undefined ? curr_blogpost.excerpt : excerpt,
        content: content === undefined ? curr_blogpost.content : content,
        featured: featured === undefined ? curr_blogpost.featured : featured,
        topPick: topPick === undefined ? curr_blogpost.topPick : topPick,
        date: date === undefined ? curr_blogpost.date : date,
        banner: banner === undefined ? curr_blogpost.banner : banner,
        banneralt:
          banneralt === undefined ? curr_blogpost.banneralt : banneralt,
        metaDescription:
          metaDescription === undefined
            ? curr_blogpost.metaDescription
            : metaDescription,
        minuteRead:
          minuteRead === undefined ? curr_blogpost.minuteRead : minuteRead,
        upadted_at: new Date().toISOString(),
        authorId: authorId === undefined ? curr_blogpost.authorId : authorId,
      },
    });
    res.status(200).json({ blogpost: updated_post, msg: "updated" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ blogpost: null, msg: "Server Error" });
  }
});

// @route   POST api/blogposts/publish/:postId
// @desc    publish/unpublish a blogpost
// @access  Public
router.put("/publish/:postId", async (req, res) => {
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


// @route   GET api/blogposts/similar/:slug
// @desc    find similar blogposts to a blogpost
// @access  Public
router.get("/similar/:slug", async (req, res) => {
  console.log(req.query);
  let { skip, take, _select, _where } = req.query;
  const {
    slug
  } = req.params

  if (typeof _select === "string") {
    _select = [_select]
  } else if (!Array.isArray(_select)) {
    _select = null
  }

  try {

    const { tags } = await blogposts.findUnique({
      select: {
        tags: {
          select: {
            tagname: true
          }
        }
      }, where: {
        slug
      }
    })

    const blog = await blogposts.findMany({
      select: {
        id: true,
        slug: true,
        title: true,
        excerpt: _select && Array.isArray(_select) ? _select.includes("excerpt") ? true : false : true,
        metaDescription: _select && Array.isArray(_select) ? _select.includes("metaDescription") ? true : false : true,
        content: _select && Array.isArray(_select) ? _select.includes("content") ? true : false : true,
        banner: _select && Array.isArray(_select) ? _select.includes("banner") ? true : false : true,
        banneralt: _select && Array.isArray(_select) ? _select.includes("banneralt") ? true : false : true,
        minuteRead: _select && Array.isArray(_select) ? _select.includes("minuteRead") ? true : false : true,
        featured: _select && Array.isArray(_select) ? _select.includes("featured") ? true : false : true,
        topPick: _select && Array.isArray(_select) ? _select.includes("topPick") ? true : false : true,
        date: _select && Array.isArray(_select) ? _select.includes("date") ? true : false : true,
        tags: _select && Array.isArray(_select) ? _select.includes("tags") ? {
          select: {
            tagname: true,
            color: true
          },
          where: {
            published: true
          },
        } : false : {
          select: {
            tagname: true,
            color: true
          },
          where: {
            published: true
          }
        },
        author: _select && Array.isArray(_select) ? _select.includes("author") ? true : false : true,
      },
      where: {
        published: false,
        slug: {
          not: slug
        },
        featured: _where && _where.featured ? _where.featured === "true" : undefined,
        tags: {
          some: { OR: tags, published: true },
        }
      },
      skip: +skip || undefined,
      take: +take || undefined,
      orderBy: {
        id: "desc"
      },
    });

    res.status("200").json(blog);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "not found any" });
  }
});