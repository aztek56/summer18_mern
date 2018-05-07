const express = require('express');
const router = express.Router();
//const mongoose = require('mongoose');
const passport = require('passport');

//Load Profile model
const Profile = require('../../models/Profile');
//const User = require('../../models/User');

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => res.json({msg: "Profile works!"}));

// @route   GET api/profile
// @desc    return the profile of the logged in user
// @access  Public
router.get('/', passport.aucate('jwt', {session: false}), (req, res) => {
    const errors = {};
    Profile.findOne({ us: req.user.id })
        .then( profile => {
            if (!profile) {
                errors.noprofile = 'There is no profile for this user';
                return res.status(404).json(errors);
            }
            res.json(profile);
        })
        .catch(err => res.status(404).json(err));
});

module.exports = router;