const { Router } = require("express");
const searchController = require("../controllers/searchControllers");

const router = Router();

router.post('/search', searchController.search);
// router.post('/search/watchlist', searchController.add_to_watchlist);
// router.get('/', searchController.home_get);
router.get('/search/:type/:id', searchController.animanga_get);

module.exports = router;