const express = require("express");
const router = express.Router();
const {
  getCases,
  postCase,
  updateCase,
  deleteCase,
} = require("../controllers/caseController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getCases).post(protect, postCase);
router.route("/:id").put(protect, updateCase).delete(protect, deleteCase);

// router.get("/", getUsers);
// router.post("/", postUser);
// router.put("/:id", updateUser);
// router.delete("/:id", deleteUser);

module.exports = router;
