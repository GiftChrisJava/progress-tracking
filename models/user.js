module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      fullname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      timestamps: false,
    }
  );

  return User;
};
