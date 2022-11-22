const asyncHandler = require("express-async-handler");
const { runInNewContext } = require("vm");

const User = require("../models/userModel");

// @desc    Get users
// @route   GET /api/users
// @access  Private
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();

  res.status(200).json(users);
});

// @desc    Set user
// @route   POST /api/users
// @access  Private
const postUser = asyncHandler(async (req, res) => {
  if (!req.body.username || !req.body.email) {
    res.status(400);
    throw new Error("Please add a user");
  }

  const user = await User.create({
    username: req.body.username,
    email: req.body.email,
  });

  res.status(200).json(user);
});
// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updateUser);
});
// @desc    Delete user
// @route   DELETE /api/users
// @access  Private
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  await user.remove();

  res.status(200).json({ id: req.params.id });
});
module.exports = {
  getUsers,
  postUser,
  updateUser,
  deleteUser,
};
