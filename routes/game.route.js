const express = require('express');
const router = express.Router();
const app = require('../app');

router.get('/game', (req, res, next) => {
  res.render('game');
});

module.exports = router;