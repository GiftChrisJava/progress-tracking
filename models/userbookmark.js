module.exports = (sequelize, DataTypes) => {
  const UserBookmark = sequelize.define(
    "userbookmark",
    {},
    {
      timestamps: false,
    }
  );

  return UserBookmark;
};
