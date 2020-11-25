const express = require("express");
const router = express.Router();
const app = require("../app");
const Question = require("../models/Questions.model");

router.get("/game", (req, res) => {
  Question.find()
    .then((questions) => {
      //console.log('Questions', questions);
      const randomQuestion =
        questions[Math.floor(Math.random() * questions.length)];
      console.log(randomQuestion);
      res.render("game", { randomQuestion });
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

module.exports = router;
