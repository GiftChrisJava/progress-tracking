// get database configuration
const config = require("../config/db");

// acquire sequelize
const { Sequelize, DataTypes } = require("sequelize");

// create sequelize instance
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.DIALECT,
});

// authenticate
sequelize
  .authenticate()
  .then(() => {
    console.log("connected to DB");
  })
  .catch(console.error());

const db = {}; // db object

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const UserBookmark = require("../models/userbookmark")(sequelize, DataTypes);
const User = require("../models/user")(sequelize, DataTypes);
const Video = require("../models/video")(sequelize, DataTypes);
const Progress = require("./progress")(sequelize, DataTypes);

// associations
Progress.belongsTo(User, { foreignKey: "user_id" });
Progress.belongsTo(Video, { foreignKey: "video_id" });

UserBookmark.belongsTo(User, { foreignKey: "user_id" });
UserBookmark.belongsTo(Video, { foreignKey: "video_id" });

db.User = User;
db.Video = Video;
db.Progress = Progress;
db.UserBookmark = UserBookmark;

// run database
db.sequelize.sync({ force: false }).then(() => {
  console.log("re-sync done...");
});

module.exports = db;
