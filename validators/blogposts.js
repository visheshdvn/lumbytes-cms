import { check } from "express-validator";
import { PrismaClient } from "@prisma/client";

const { blogposts } = new PrismaClient();

const createBlogpost = [
  check("title", "title is required").not().isEmpty(),
  check("title", "title should be a string").isString(),
  check("slug", "slug should be a valid string")
    .isString()
    .custom((slug) => {
      if (slug.trim() === "") {
        return Promise.reject("String cannot be empty/only-spaces ");
      } else {
        return Promise.resolve("String is valid.");
      }
    }),
  check("slug", "slug should be unique").custom((slug) => {
    return blogposts.findMany({ where: { slug } }).then((blogpost) => {
      if (blogpost.length > 0) {
        return Promise.reject("slug already taken");
      } else {
        return Promise.resolve("slug allowed");
      }
    });
  }),
];

export { createBlogpost };
