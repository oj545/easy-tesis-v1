const express = require("express");
const middleware = require("../middleware/protect");
const chapterController = require("../controllers/chapterController");

const router = express.Router({ mergeParams: true });

router.use(middleware.protect);

router.route("/:id").patch(chapterController.UpdateChapter);

router
  .route("/:title")
  .get(chapterController.getChapter)
  .post(chapterController.createChapter);

module.exports = router;
