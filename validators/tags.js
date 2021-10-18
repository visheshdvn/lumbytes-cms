import { check } from "express-validator";
import { PrismaClient } from "@prisma/client";

const { tags } = new PrismaClient();

const notEmpty = (value) => {
  if (value.trim() === "") {
    return Promise.reject("value cannot be empty or only spaces ");
  } else {
    return Promise.resolve("value is valid.");
  }
};

const commoninInCreateandUpdate = [
  check("color", "should be hex color")
    .optional({ checkFalsy: true })
    .isHexColor(),
  check("metaDescription", "meta descrption should be a valid string")
    .optional({ checkFalsy: true })
    .isString()
    .custom((value) => notEmpty(value))
    .isLength({ max: 200 })
    .withMessage("meta descrption should be under 201 characters"),
];

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
  ...commoninInCreateandUpdate,
];

export const updateTag = [
  check("tagname", "tagname should be a unique string with max length 20")
    .optional()
    .isString()
    .isLength({ max: 20 })
    .withMessage("length should be max 20")
    .custom((tagname, { req }) => {
      return tags
        .findMany({
          where: {
            tagname,
            id: {
              not: +req.params.tagId,
            },
          },
        })
        .then((tag) => {
          if (tag.length > 0) {
            return Promise.reject("tagname should be unique");
          } else {
            return Promise.resolve("allowed");
          }
        });
    }),
  ...commoninInCreateandUpdate,
];
