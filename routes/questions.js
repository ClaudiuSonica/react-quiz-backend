const express = require("express");
const { getQuestions } = require("../controllers/questions");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome home");
});

router.get("/questions", getQuestions);

module.exports = router;
