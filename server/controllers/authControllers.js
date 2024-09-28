const User = require("../models/User");
const jwt = require("jsonwebtoken");

require("dotenv").config();

// ERROR HANDLING
const handleErrors = (err) => {
   const errors = {username: "", email: "", password: ""};


}

const maxAge = 3 * 24 * 60 * 60;
function createToken(id) {
    const token = jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: maxAge,
    });

    return token;
}

// SIGNUP
module.exports.signup_post = async (req, res) => {
    const { username, email, password } = req.body;
    
    try {
        await User.create({username, email, password});

        res.status(201).json({redirect: true});
    } catch (err) {
        // const errors = handleErrors(err);
        // res.status(400).json({errors})
    }
}

// LOGIN
module.exports.login_post = async (req, res) => {
    const { username_email, password } = req.body;

    try {
        console.log("bedore")
        const user = await User.login(username_email, password);
        const token = createToken(user._id);
        console.log(token)
        res.cookie('jwt', token, { httpOnly: false, maxAge: maxAge * 1000 });
        res.status(200).json({ user: user._id });
    } catch (err) {
        // const errors = handleErrors(err);
        // res.status(400).json({errors});
    }
}
// why is get not async

// LOGOUT
module.exports.logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1, httpOnly: true});
    res.redirect('/');
}
// res.header('Access-Control-Allow-Origin', req.headers.origin);
// res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

// USER
module.exports.user_get = async (req, res) => {
    console.log(req.headers['authorization']);
    // res.setHeader("Access-Control-Allow-Credentials", "true");
    // need middleware
    res.json(res.user)
}