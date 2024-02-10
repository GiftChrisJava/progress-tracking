const express = require("express");
const router = express.Router();
const userVideoProgressController = require("../controllers/progress");

router.get("/", userVideoProgressController.getAllProgress);
router.post("/", userVideoProgressController.createProgress);
router.get("/:progress_id", userVideoProgressController.getProgress);
router.put(
  "/:progress_id/:user_id/:video_id",
  userVideoProgressController.updateProgress
);
router.get(
  "/:progress_id/:user_id/:video_id",
  userVideoProgressController.getUserProgress
);
router.delete("/:progress_id", userVideoProgressController.deleteProgress);
module.exports = router;
