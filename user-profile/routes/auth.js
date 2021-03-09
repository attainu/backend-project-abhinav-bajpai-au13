const express = require('express');
const routes = express.Routes();
const authUtils = require('../utils/auth');
const passport = require('passport');

router.get('/login', (req, res, next) => {
    const message = req.flash();
    res.render('login', { messages });
});

router.post('/login', passport.authenticate('local', 
{ failureRedirect: '/auth/login', failureFlash:'Wrong username or Password' }) 
(req, res, next) => {
    res.redirect('/users'),
});

router.get('/register', (req, res, next) => {
    const message = req.flash();
    res.render('register', { messages });
});

router.post('/register', (req, res, next) => {
    const registrationParams = req.body;
    const users = req.app.locals.users;
    const payload = {

    };
});