const User = require('../models/User'); 



function getUserProfile(req, res) {
    User.find({}, function(err,users){
        res.render('user/index',{users,
        user: req.user
        });   //render the user/
    })
}

function updateUserProfile(req, res) {
    // Implementation
}

function deleteUser(req, res) {
    // Implementation
}

module.exports = {
    getUserProfile,
    updateUserProfile,
    deleteUser
};