// user.routes.js
const express = require("express");
const router = express.Router();
const controller = require("../controller/user.controller");

router.post("/createMessage", controller.createMessage);
router.get("/getMessages", controller.getMessages); 

module.exports = router;
