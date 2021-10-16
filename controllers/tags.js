import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { check, validationResult } from "express-validator";


const router = Router();
const { tags, testdb } = new PrismaClient();

// @route   GET api/tags
// @desc    get all published tags
// @access  Public
router.get("/", async (req, res) => {
  try {
    const tag = await tags.findMany({
      where: {
        published: false
      }
    });
    console.log(tag);
    res.status("200").json(tag);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "not found any" });
  }
});



export default router