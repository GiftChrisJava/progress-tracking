const express = require("express");
const router = express.Router();
const videoController = require("../controllers/video");

router.get("/", videoController.getAllvideo);
router.post("/", videoController.createvideo);
router.get("/:video_id", videoController.getVideo);
router.put("/:video_id", videoController.updateVideoById);
router.put("/", videoController.updateVideo);
router.delete("/:video_id", videoController.deleteVideo);
module.exports = router;
