const asyncHandler = require("express-async-handler");
const { runInNewContext } = require("vm");

const Case = require("../models/caseModel");

// @desc    Get cases
// @route   GET /api/cases
// @access  Private
const getCases = asyncHandler(async (req, res) => {
  const cases = await Case.find();

  res.status(200).json(cases);
});

// @desc    Set user
// @route   POST /api/users
// @access  Private
const postCase = asyncHandler(async (req, res) => {
  if (
    !req.body.title ||
    !req.body.address ||
    !req.body.city ||
    !req.body.description ||
    !req.body.rooms ||
    !req.body.size ||
    !req.body.availableFrom ||
    !req.body.deposit ||
    !req.body.rent ||
    !req.body.prepaidRent ||
    !req.body.heatPrice ||
    !req.body.waterPrice
  ) {
    res.status(400);
    throw new Error("Please don't leave fields empty");
  }
  // _ is added onto case variable name because case isn't allowed alone.
  const _case = await Case.create({
    title: req.body.title,
    address: req.body.address,
    city: req.body.city,
    description: req.body.description,
    rooms: req.body.rooms,
    size: req.body.size,
    availableFrom: req.body.availableFrom,
    deposit: req.body.deposit,
    rent: req.body.rent,
    prepaidRent: req.body.prepaidRent,
    isAconto: req.body.isAconto,
    heatPrice: req.body.heatPrice,
    waterPrice: req.body.waterPrice,
    petsAllowed: req.body.petsAllowed,
    elevatorAvailable: req.body.elevatorAvailable,
    balcony: req.body.balcony,
    isReserved: req.body.isReserved,
  });

  res.status(200).json(_case);
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
  getCases,
  postCase,
  updateUser,
  deleteUser,
};
