const express = require("express");
const router = express.Router();
const userVideoProgressController = require("../controllers/progress");

router.get("/progress", userVideoProgressController.getAllProgress);
router.post("/progress", userVideoProgressController.createProgress);
router.get("/bookmarks", userVideoProgressController.getAllBookmarks);
router.post("/bookmarks", userVideoProgressController.createBookmark);
module.exports = router;
