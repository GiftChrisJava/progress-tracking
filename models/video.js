module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define(
    "video",
    {
      url: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );

  return Video;
};
