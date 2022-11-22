// @desc    Get users
// @route   GET /api/users
// @access  Private
const getUsers = (req, res) => {
  res.status(200).json({ message: "Get Users" });
};

// @desc    Set user
// @route   POST /api/users
// @access  Private
const postUser = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a user");
  }
  res.status(200).json({ message: "Created User" });
};
// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private
const updateUser = (req, res) => {
  res.status(200).json({ message: `Updated User ${req.params.id}` });
};
// @desc    Delete user
// @route   DELETE /api/users
// @access  Private
const deleteUser = (req, res) => {
  res.status(200).json({ message: `Deleted User ${req.params.id}` });
};
module.exports = {
  getUsers,
  postUser,
  updateUser,
  deleteUser,
};
