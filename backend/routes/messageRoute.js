const express = require("express");

const {
  createMessage,
  getAllMessages,
} = require("../controllers/messageController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/create").post(createMessage);
router.route("/messages").get(getAllMessages);

module.exports = router;
