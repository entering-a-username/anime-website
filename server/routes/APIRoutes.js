const { Router } = require("express");
const profileController = require("../controllers/profileControllers");

const router = Router();

// profile
router.get("/api/profile", profileController.getProfile);
router.put("/api/profile", profileController.editProfile);

module.exports = router;