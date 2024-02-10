const entities = require("../models");

const Progress = entities.Progress;
const UserBookmark = entities.UserBookmark;
const User = entities.User;
const Video = entities.Video;

exports.getAllProgress = async (req, res) => {
  try {
    const progress = await Progress.findAll();
    return res.json(progress);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createProgress = async (req, res) => {
  const { user_id, video_id } = req.body;
  try {
    const existingVideo = await Video.findOne({ where: { id: video_id } });

    if (!existingVideo) {
      return res.status(404).json({ error: "Video Not Found" });
    }

    const existingUser = await User.findOne({ where: { id: user_id } });

    if (!existingUser) {
      return res.status(404).json({ error: "User Not Found" });
    }
    const progress = await Progress.create({
      user_id,
      video_id,
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
    const existingProgress = await Progress.findOne({
      where: { id: progress_id },
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
  const { progress_id, user_id, video_id } = req.params;
  const { progress_time } = req.body;

  try {
    const existingVideo = await Video.findOne({ where: { id: video_id } });

    if (!existingVideo) {
      return res.status(404).json({ error: "Video Not Found" });
    }

    const existingUser = await User.findOne({ where: { id: user_id } });

    if (!existingUser) {
      return res.status(404).json({ error: "User Not Found" });
    }

    let id = progress_id;

    const existingProgress = await Progress.findOne({
      where: { id: progress_id },
    });

    if (!existingProgress) {
      return res.status(404).json({ error: "Video Progress Not Found" });
    }

    await existingProgress.update(
      { progress_time },
      {
        where: { user_id, progress_id },
      }
    );

    return res.json({ message: "Updated" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getUserProgress = async (req, res) => {
  const { progress_id, user_id, video_id } = req.params;

  try {
    const existingVideo = await Video.findOne({ where: { id: video_id } });

    if (!existingVideo) {
      return res.status(404).json({ error: "Video Not Found" });
    }

    const existingUser = await User.findOne({ where: { id: user_id } });

    if (!existingUser) {
      return res.status(404).json({ error: "User Not Found" });
    }

    const existingProgress = await Progress.findOne({
      where: { id: progress_id, user_id, video_id },
    });

    if (!existingProgress) {
      return res.status(404).json({ error: "Video Progress Not Found" });
    }

    return res.json(existingProgress);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// remove progress
exports.deleteProgress = async (req, res) => {
  const { progress_id } = req.params;

  try {
    const existingProgress = await Progress.findOne({
      where: { id: progress_id },
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
