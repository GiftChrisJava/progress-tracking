module.exports = (sequelize, DataTypes) => {
  const UserVideoProgress = sequelize.define(
    "uservideoprogress",
    {
      current_time: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      duration: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
    }
  );

  return UserVideoProgress;
};
