const express = require("express");
const cors = require("cors");
const app = express();
const progressRoutes = require("./routes/progress.routes");
const vieoRoutes = require("./routes/video.routes");

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/progress", progressRoutes);
app.use("/video", vieoRoutes);

// define port
const PORT = process.env.PORT || 8080;

// server
app.listen(PORT, () => {
  console.log(`listening @ http://localhost:${PORT}`);
});
