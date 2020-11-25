const express = require('express');
const router = express.Router();
const app = require('../app');
const User = require('../models/User.model.js');


router.get('/game', (req, res) => {
    const { score } = req.session.user;
    //  const {usernq,e} = req.body;
    User.find().then(score => {
        console.log('User', score);
        res.render('game', { score });
    }).catch(err => {
        console.log('Error', err);
    })
});

module.exports = router;