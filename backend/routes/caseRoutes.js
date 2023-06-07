const express = require("express");
const router = express.Router();
const {
  getCase,
  getUserCases,
  getAllCases,
  postCase,
  updateCase,
  deleteCase,
} = require("../controllers/caseController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getUserCases).post(protect, postCase);
router.route("/:id").put(protect, updateCase).delete(protect, deleteCase)
router.get("/case/:id", getCase);
router.get("/all", getAllCases);

module.exports = router;
