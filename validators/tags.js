import { check } from "express-validator";
import { PrismaClient } from "@prisma/client";

const { tags } = new PrismaClient();

export const createTag = [
  check("tagname", "tagname should be a unique string with max length 20")
    .isString()
    .isLength({ max: 20 })
    .withMessage("length should be max 20")
    .custom((tagname) => {
      return tags.findMany({ where: { tagname } }).then((tag) => {
        if (tag.length > 0) {
          return Promise.reject("tagname should be unique");
        } else {
          return Promise.resolve("allowed");
        }
      });
    }),
  check("color", "should be hex color").optional().isHexColor(),
  check("metaDescription", "meta descrption should be a valid string")
    .optional({ checkFalsy: true })
    .isString()
    .custom((value) => notEmpty(value))
    .isLength({ max: 200 })
    .withMessage("meta descrption should be under 201 characters"),
];
