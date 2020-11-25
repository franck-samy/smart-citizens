const express = require("express");
const User = require("../models/User.model");
const router = express.Router();

// router.get("/", (rq, res) => {
//   res.json([1, 2, 3]);
// });

router.post("/", (req, res) => {
  User.findByIdAndUpdate(
    req.session.user._id,
    { score: req.session.user.score + 5 },
    { new: true }
  )
    .then((updateUser) => {
      console.log(updateUser);
      req.session.user = updateUser;
      res.json("user updated");
      //res.redirect("/game");
    })
    .catch((err) => {
      console.log("error", err);
    });
  console.log(req.session);
});

module.exports = router;
