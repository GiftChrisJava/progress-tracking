const express = require("express");
const router = express.Router();
const videoController = require("../controllers/video");

router.get("/", videoController.getAllvideo);
router.post("/", videoController.createvideo);
router.get("/:progress_id", videoController.getVideo);
router.put("/:progress_id", videoController.updateVideo);
router.delete("/:progress_id", videoController.deleteVideo);
module.exports = router;
