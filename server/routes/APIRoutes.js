const { Router } = require("express");
const profileController = require("../controllers/profileControllers");
const postControllers  = require("../controllers/postControllers");

const router = Router();
// not camel case

// profile
router.get("/api/profile", profileController.getProfile);
router.put("/api/profile", profileController.editProfile);

// posts
router.get("/api/posts", postControllers.getPosts);
router.get("/api/post/:id", postControllers.getPost);
// only accessible to user
router.post("/api/posts", checkUser, postControllers.createPost);


module.exports = router;