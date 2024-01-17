const ErrorHander = require("../utils/errorhander");
const Message = require("../models/messageModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// create message

exports.createMessage = catchAsyncErrors(async (req, res, next) => {
  const { message } = req.body;
  const newMessage = await Message.create({
    message,
    userId: req.body.user._id,
    userName: req.body.user.name,
  });

  res.status(200).json({
    success: true,
    newMessage,
  });
});

// Get all messages
exports.getAllMessages = catchAsyncErrors(async (req, res, next) => {
  const messages = await Message.find();

  res.status(200).json({
    success: true,
    count: messages.length,
    messages,
  });
});
