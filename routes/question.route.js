const express = require('express');
const router = express.Router();
const app = require('../app');
const Question = require('../models/Questions.model.js');

router.get('/game', (req, res) => {
  Question.find().then(questions => {
    console.log('Questions', questions);
    res.render('game', { questions });
  }).catch(err => {
    console.log('Error', err);
  }) 
});

module.exports = router;