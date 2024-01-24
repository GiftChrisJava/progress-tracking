const UserVideoProgress = require("../models/userVideoProgress");
const UserBookmark = require("../models/userbookmark");

exports.getAllProgress = async (req, res) => {
  try {
    const progress = await UserVideoProgress.findAll();
    res.json(progress);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createProgress = async (req, res) => {
  const { user_id, video_id, current_time, duration, completed } = req.body;
  try {
    const progress = await UserVideoProgress.create({
      user_id,
      video_id,
      current_time,
      duration,
      completed,
    });
    res.json(progress);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getAllBookmarks = async (req, res) => {
  try {
    const bookmarks = await UserBookmark.findAll();
    res.json(bookmarks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createBookmark = async (req, res) => {
  const { user_id, video_id } = req.body;
  try {
    const bookmark = await UserBookmark.create({
      user_id,
      video_id,
    });
    res.json(bookmark);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
