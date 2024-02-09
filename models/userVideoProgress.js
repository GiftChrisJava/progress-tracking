module.exports = (sequelize, DataTypes) => {
  const UserVideoProgress = sequelize.define(
    "uservideoprogress",
    {
      progress_time: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      duration: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
    }
  );

  return UserVideoProgress;
};
