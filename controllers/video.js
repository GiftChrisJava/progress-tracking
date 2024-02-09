const entities = require("../models");

// const User = entities.User;
const Video = entities.Video;

exports.getAllvideo = async (req, res) => {
  try {
    const video = await Video.findAll();
    return res.json(video);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createvideo = async (req, res) => {
  const { url } = req.body;
  try {
    const video = await Video.create({
      url,
    });
    return res.json(video);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// get video for a single user
exports.getVideo = async (req, res) => {
  const { video_id } = req.params;

  try {
    const existingvideo = await Video.findOne({
      where: { id: video_id },
    });

    if (!existingvideo) {
      return res.status(404).json({ error: "Video video Not Found" });
    }

    return res.json(existingvideo);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateVideo = async (req, res) => {
  const { url } = req.body;

  try {
    const existingVideo = await Video.findOne({ where: { url } });

    if (!existingVideo) {
      return res.status(404).json({ error: "Video Not Found" });
    }

    await Video.update({ url });

    return res.json({ message: "Updated" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// remove video
exports.deleteVideo = async (req, res) => {
  const { video_id } = req.params;

  try {
    const existingvideo = await Video.findOne({
      where: { id: video_id },
    });

    if (!existingvideo) {
      return res.status(404).json({ error: "Video video Not Found" });
    }

    await existingvideo.destroy();

    return res.json({ message: "deleted" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
