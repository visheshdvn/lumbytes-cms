import { check } from "express-validator";
import { PrismaClient } from "@prisma/client";

const { blogposts } = new PrismaClient();

// DRY checks
const commonInCreateAndUpdate = [
  check("metaDescription", "meta descrption should be a valid string")
    .optional({ checkFalsy: true })
    .isString()
    .custom((value) => notEmpty(value))
    .isLength({ max: 200 })
    .withMessage("meta descrption should be under 201 characters"),
  check("excerpt", "excerpt should be a valid string")
    .optional({ checkFalsy: true })
    .isString()
    .custom((value) => notEmpty(value))
    .isLength({ max: 150 })
    .withMessage("excerpt should be under 150 characters"),
  check("minuteRead", "minute read should be an Integer")
    .optional()
    .not()
    .isString()
    .isInt({ min: 1 })
    .withMessage("minute read should be greater tham 0"),
  check("topPick", "topPick should be boolean")
    .optional()
    .not()
    .isString()
    .not()
    .isFloat()
    .isBoolean(),
  check("featured", "featured should be boolean")
    .optional()
    .not()
    .isString()
    .not()
    .isFloat()
    .isBoolean(),
  check("date", "date should be iso string")
    .optional()
    .isISO8601()
    .custom((date) => /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(date)),
];

const notEmpty = (value) => {
  if (value.trim() === "") {
    return Promise.reject("value cannot be empty or only spaces ");
  } else {
    return Promise.resolve("value is valid.");
  }
};

// creating a blogpost
export const createBlogpost = [
  check("title", "title should be a non empty string")
    .isString()
    .custom((title) => notEmpty(title)),
  check("slug", "slug should be a valid string")
    .isString()
    .custom((slug) => notEmpty(slug))
    .custom((slug, { req }) => {
      return blogposts
        .findMany({
          where: {
            slug,
            id: {
              not: req.params.postId,
            },
          },
        })
        .then((blogpost) => {
          if (blogpost.length > 0) {
            return Promise.reject("slug should be unique");
          } else {
            return Promise.resolve("slug valid");
          }
        });
    }),
  ...commonInCreateAndUpdate,
];

// update blogpost validation
export const updateBlogpost = [
  check("title", "title should be a string")
    .optional()
    .isString()
    .custom((title) => notEmpty(title)),
  check("slug", "slug should be a valid string")
    .optional()
    .isString()
    .custom((slug) => notEmpty(slug))
    .custom((slug, { req }) => {
      return blogposts
        .findMany({
          where: {
            slug,
            id: {
              not: req.params.postId,
            },
          },
        })
        .then((blogpost) => {
          if (blogpost.length > 0) {
            return Promise.reject("slug should be unique");
          } else {
            return Promise.resolve("slug valid");
          }
        });
    }),
  ...commonInCreateAndUpdate,
];

const publishBlogpost = [
  check("title", "title should be a non empty string")
    .isString()
    .custom((title) => notEmpty(title)),
  check("slug", "slug should be a valid string")
    .isString()
    .custom((slug) => notEmpty(slug))
    .custom((slug) => {
      return blogposts.findMany({ where: { slug } }).then((blogpost) => {
        if (blogpost.length > 0) {
          return Promise.reject("slug should be unique");
        } else {
          return Promise.resolve("slug valid");
        }
      });
    }),
];
