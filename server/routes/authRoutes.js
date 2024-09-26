const { Router } = require("express");
const authController = require("../controllers/authControllers");

const router = Router();

// SIGNUP
router.get("/signup", authController.signup_get);
router.post("/signup", authController.signup_post);

// LOGIN
router.get("/login", authController.login_get);
router.post("/login", authController.login_post);

// LOGOUT
router.get("/logout", authController.logout_get);

// USER
router.get("/user", authController.user_get);

module.exports = router;