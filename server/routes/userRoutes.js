const express = require("express");
const authController = require("../controllers/authController");
const middleware = require("../middleware/protect");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.use(middleware.protect);

router.route("/").get(userController.getMe);

module.exports = router;
