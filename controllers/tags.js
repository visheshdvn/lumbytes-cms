import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { validationResult } from "express-validator";
// tags imports
import { createTag } from "../validators/tags";

const router = Router();
const { tags } = new PrismaClient();

// @route   GET api/tags
// @desc    get all published tags
// @access  Public
router.get("/", async (req, res) => {
  const { skip, take } = req.query;
  try {
    const tag = await tags.findMany({
      where: {
        published: true,
      },
      select: {
        id: true,
        tagname: true,
        color: true,
        metaDescription: true,
        ogimg: true,
        ogalt: true,
      },
      skip: +skip || undefined,
      take: +take || undefined,
    });
    res.status("200").json(tag);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});

// @route   GET api/tags/:id
// @desc    find a tag from the id
// @access  Public
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const tag = await tags.findMany({
      where: {
        published: true,
        id: +id,
      },
    });
    res.status("200").json(tag[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "not found any" });
  }
});

// @route   POST api/tags/create
// @desc    create a blogpost
// @access  Public
router.post("/create", createTag, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { tagname, color, metaDescription, ogimg, ogalt } = req.body;

  try {
    const tag = await tags.create({
      data: {
        tagname,
        color,
        metaDescription,
        ogimg,
        ogalt,
        created_at: new Date().toISOString(),
        upadted_at: new Date().toISOString(),
        published: false,
      },
    });

    res.status(200).json({ tag, status: "created" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "Error - not created" });
  }
});

export default router;
