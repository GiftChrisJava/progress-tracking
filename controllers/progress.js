const entities = require("../models");

const UserVideoProgress = entities.UserVideoProgress;
const UserBookmark = entities.UserBookmark;
const User = entities.User;
const Video = entities.Video;

exports.getAllProgress = async (req, res) => {
  try {
    const progress = await UserVideoProgress.findAll();
    return res.json(progress);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
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
    return res.json(progress);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// get progress for a single user
exports.getProgress = async (req, res) => {
  const { progress_id } = req.params;

  try {
    const existingProgress = await UserVideoProgress.findByPk({
      id: progress_id,
    });

    if (!existingProgress) {
      return res.status(404).json({ error: "Video Progress Not Found" });
    }

    return res.json(existingProgress);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateProgress = async (req, res) => {
  const { progress_id } = req.params;
  const { user_id, video_id, current_time } = req.body;

  try {
    const existingVideo = await Video.findByPk({ id: video_id });

    if (!existingVideo) {
      return res.status(404).json({ error: "Video Not Found" });
    }

    const existingUser = await User.findByPk({ id: user_id });

    if (!existingUser) {
      return res.status(404).json({ error: "User Not Found" });
    }

    const existingProgress = await UserVideoProgress.findOne({
      where: { progress_id, user_id, video_id },
    });

    if (!existingProgress) {
      return res.status(404).json({ error: "Video Progress Not Found" });
    }

    await UserVideoProgress.update({ current_time });

    return res.json({ message: "Updated" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// remove progress
exports.deleteProgress = async (req, res) => {
  const { progress_id } = req.params;

  try {
    const existingProgress = await UserVideoProgress.findByPk({
      id: progress_id,
    });

    if (!existingProgress) {
      return res.status(404).json({ error: "Video Progress Not Found" });
    }

    await existingProgress.destroy();

    return res.json({ message: "deleted" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getAllBookmarks = async (req, res) => {
  try {
    const bookmarks = await UserBookmark.findAll();
    return res.json(bookmarks);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createBookmark = async (req, res) => {
  const { user_id, video_id } = req.body;
  try {
    const bookmark = await UserBookmark.create({
      user_id,
      video_id,
    });
    return res.json(bookmark);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
