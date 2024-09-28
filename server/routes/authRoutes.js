const { Router } = require("express");
const authController = require("../controllers/authControllers");
const checkUser = require("../middleware/checkUser");

const router = Router();

// SIGNUP
router.post("/signup", authController.signup_post);

// LOGIN
router.post("/login", authController.login_post);

// LOGOUT
router.get("/logout", authController.logout_get);

// USER
router.get("/user", checkUser, authController.user_get);

module.exports = router;