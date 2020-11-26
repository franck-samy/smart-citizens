const express = require("express");
const router = express.Router();
const app = require("../app");
const User = require("../models/User.model");

// router.get("/profile", (req, res, next) => {
//   res.render("profile");
// });

router.get("/profile", (req, res) => {
  User.findById(req.session.user._id)
    .then((userInfo) => {
      const { username, city, profilePic, images } = userInfo;
      console.log(images);
      //console.log(userInfo[0].username);
      //need to Add city vAriAable later
      res.render("profile", { username, city, profilePic, images });
    })
    .catch((err) => {
      console.log("Error", err);
    });
});

module.exports = router;
