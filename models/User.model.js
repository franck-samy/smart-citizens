const { urlencoded } = require("express");
const { Schema, model } = require("mongoose");
const url = "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png";

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "Must have a username!"],
  },
  password: {
    type: String,
    required: [true, "Must have a password!"],
  },
  score: {
    type: Number,
    default: 0,
  },
  city: {
    type: String,
  },
  profilePic: {
    type: String,
    default: url,
  },
  images: [
    {
      type: String,
    },
  ],
});

const User = model("User", userSchema);

module.exports = User;
