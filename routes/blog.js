const express = require("express");
const path = require("path");
const blog = require("../data/blogs");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("get  acheive");
  res.sendFile(path.join(__dirname, "../templates/index.html"));
});
router.get("/blog", (req, res) => {
  blog.forEach((e) => {
    console.log(e.title);
  });
  res.sendFile(path.join(__dirname, "../templates/index.html"));
});

module.exports = router;
