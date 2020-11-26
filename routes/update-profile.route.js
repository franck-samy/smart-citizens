const express = require("express");
const router = express.Router();
const app = require("../app");
const uploader = require("../config/cloudinary.config.js");
const User = require("../models/User.model");

router.get("/update-profile", (req, res) => {
  res.render("update-profile");
});

router.post("/update-profile", (req, res, next) => {
  const { username, city, password } = req.body;

  User.findByIdAndUpdate(
    req.session.user._id,
    { username, password, city },
    { new: true }
  )
    .then((updatedUser) => {
      res.redirect("/profile");
    })
    .catch((error) => {
      console.log("Error", error);
    });
  // Your code to store your url in your database should be here
});

module.exports = router;
