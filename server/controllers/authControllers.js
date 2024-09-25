const User = require("../models/User");
const jwt = require("jsonwebtoken");

require("dotenv").config();

// ERROR HANDLING
const handleErrors = (err) => {
   
}

const maxAge = 3 * 24 * 60 * 60;
function createToken(id) {
    const token = jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: maxAge,
    });

    return token;
}

// SIGNUP
module.exports.signup_get = (req, res) => res.send("YP");

module.exports.signup_post = async (req, res) => {
    const { username, email, password } = req.body;
    
    try {
        const information = [];
        const user = await User.create({username, email, password});
        // const token = createToken(user._id);

        res.status(201).json({redirect: true});
    } catch (err) {
        // const errors = handleErrors(err);
        // res.status(400).json({errors})
    }
}





// LOGIN
module.exports.login_get = (req, res) => res.render("login", {user: res.user});

module.exports.login_post = async (req, res) => {
    const { username_email, password } = req.body;

    try {
        const user = await User.login(username_email, password);
        const token = createToken(user._id);

        res.cookie('jwt', token, { httpOnly: false, maxAge: maxAge * 1000 });
        res.status(200).json({ user: user._id });
    } catch (err) {
        // const errors = handleErrors(err);
        // res.status(400).json({errors});
    }
}
// why get not async

// LOGOUT
