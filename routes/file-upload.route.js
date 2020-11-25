const express = require('express');
const router = express.Router();
const app = require('../app');
const uploader = require('../config/cloudinary.config.js');
let img = [];

router.post('/upload', uploader.single("imageUrl"), (req, res, next) => {
  // the uploader.single() callback will send the file to cloudinary and get you and obj with the url in return
  console.log('file is: ', req.file)
  img.push(req.file.path);


  if (!req.file) {
    console.log("there was an error uploading the file");
    next(new Error('No file uploaded!'));
    return;
  }

  // You will get the image url in 'req.file.path'

  // Your code to store your url in your database should be here
})

console.log(img);
module.exports = router;