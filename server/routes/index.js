const router = require('express').Router();
const passport = require('passport');
const Model = require('../models/Model')

router.get('/', async (req, res) => {
    try {
        const data = await Model.find(); 
        res.render('index', { 
            message: "Welcome to the Zelaya Roofing API!",
            user: req.user,
            data: data 
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
})

//login
router.get('/auth/google', passport.authenticate('google', { 
    scope: ['profile', 'email'] 
}));

router.get('/oauth2callback', passport.authenticate('google',{
    successRedirect: '/users',
    failureRedirect: '/'
}));

router.get('/logout', function(req,res){
    req.logOut();
    res.redirect('/');
})

module.exports = router;