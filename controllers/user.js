const entities = require("../models");

const User = entities.User;

exports.getAllUser = async (req, res) => {
  try {
    const user = await User.findAll();
    return res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createUser = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.create({
      email,
    });
    return res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// get user for a single user
exports.getUser = async (req, res) => {
  const { user_id } = req.params;

  try {
    const existingUser = await User.findByPk({
      id: user_id,
    });

    if (!existingUser) {
      return res.status(404).json({ error: "User User Not Found" });
    }

    return res.json(existingUser);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateUser = async (req, res) => {
  const { user_id } = req.params;
  const { email } = req.body;

  try {
    const existingUser = await User.findByPk({ id: user_id });

    if (!existingUser) {
      return res.status(404).json({ error: "User Not Found" });
    }

    await existingUser.update({ email });

    return res.json({ message: "Updated" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// remove user
exports.deleteUser = async (req, res) => {
  const { User_id } = req.params;

  try {
    const existingUser = await User.findByPk({
      id: User_id,
    });

    if (!existingUser) {
      return res.status(404).json({ error: "User User Not Found" });
    }

    await existingUser.destroy();

    return res.json({ message: "deleted" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
