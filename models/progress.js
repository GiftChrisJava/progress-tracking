module.exports = (sequelize, DataTypes) => {
  const Progress = sequelize.define(
    "progress",
    {
      progress_time: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
      },
      duration: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0,
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

  return Progress;
};
