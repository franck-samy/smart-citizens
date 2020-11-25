const express = require("express");
const router = express.Router();
// const app = require("../app");
const Question = require("../models/Questions.model.js");
const User = require("../models/User.model");

router.get("/game", (req, res) => {
  Question.find()
    .then((questions) => {
      //console.log('Questions', questions);
      const randomQuestion =
        questions[Math.floor(Math.random() * questions.length)];
      //console.log(randomQuestion);
      res.render("game", { randomQuestion });
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

// router.get("/game", (req, res) => {
//   User.findById(req.session.user._id)
//     .then((user) => {
//       console.log(user);
//       // let score = score;
//       // console.log(score);
//       // res.render("game", { userScore });
//     })
//     .catch((err) => {
//       console.log("Error", err);
//     });
// });

// router.get("/game", (req, res) => {
//   try {
//     User.find().then((questions) => {
//       console.log("Questions", questions);
//       const randomQuestion =
//         questions[Math.floor(Math.random() * questions.length)];
//       console.log(randomQuestion);
//       res.render("game", { randomQuestion });
//     });
//   } catch (err) {
//     console.log("Error", err);
//   }
// });

module.exports = router;
