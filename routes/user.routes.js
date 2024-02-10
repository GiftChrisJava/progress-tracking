const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.get("/", userController.getAllUser);
router.post("/", userController.createUser);
router.get("/:user_id", userController.getUser);
router.get("/email/:email", userController.getUserByEmail);
router.put("/:user_id", userController.updateUser);
router.delete("/:user_id", userController.deleteUser);
module.exports = router;
