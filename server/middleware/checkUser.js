require("dotenv").config();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

function checkUser(req, res, next) {
    const token = req.headers['authorization'];
    console.log("t")
    console.log(token)

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
            if (err) {
                res.user = null;
                console.log(err)
                next();
            } else {
                console.log("good")
                const user = await User.findById(decodedToken.id);
                res.user = user;
                next();
            }
        })
    } else {
        res.user = null;
        // whats res.locals.user;
        next();
    }
}

module.exports = checkUser;