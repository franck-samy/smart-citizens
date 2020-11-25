const express = require('express');
const router = express.Router();
const app = require('../app');

//const registerRouters = require('./auth');
//const signinRouter = require('./sign-in.router');
const profileRouter = require('./profile.route');
const updateRouter = require('./file-upload.route');
const gameRouter = require('./game.route');
const questionRouter = require('./question.route');


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

//router.use('/', registerRouters);
//router.use('/', signinRouter);
router.use('/', profileRouter);
router.use('/', updateRouter);
router.use('/', gameRouter);
router.use('/', questionRouter);



module.exports = router;