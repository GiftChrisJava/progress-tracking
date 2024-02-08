const express = require("express");
const router = express.Router();
const userVideoProgressController = require("../controllers/progress");

router.get("/", userVideoProgressController.getAllProgress);
router.post("/", userVideoProgressController.createProgress);
router.get("/:progress_id", userVideoProgressController.getProgress);
router.put("/:progress_id", userVideoProgressController.updateProgress);
router.delete("/:progress_id", userVideoProgressController.deleteProgress);
module.exports = router;
