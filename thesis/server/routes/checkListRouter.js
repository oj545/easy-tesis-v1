const express = require("express");
const middleware = require("../middleware/protect");
const checkListController = require("../controllers/checkLisetController");

const router = express.Router();

router.use(middleware.protect);

router.route("/:id").get(checkListController.getCheckLiset);

module.exports = router;
