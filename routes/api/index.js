const router = require("express").Router();
const articleRoute = require("./articles");

// API Routes
router.use("./articles", articleRoute);

module.exports = router;
