const express = require("express");
const cors = require("cors");
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// define port
const PORT = process.env.PORT || 8080;

// server
app.listen(PORT, () => {
  console.log(`listening @ http://localhost:${PORT}`);
});
