const express = require('express');
const router = express.Router();
const app = require('../app');
/*
const registerRouters = require('./auth');
const signinRouter = require('./sign-in.router');
const profileRouter = require('./profile.router');
*/
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});
/*
router.use('/', registerRouters);
router.use('/', signinRouter);
router.use('/', profileRouter);
*/
module.exports = router;