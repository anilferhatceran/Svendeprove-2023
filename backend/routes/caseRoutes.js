const express = require("express");
const router = express.Router();
const { getCases, postCase } = require("../controllers/caseController");

router.route("/").get(getCases).post(postCase);

// router.get("/", getUsers);
// router.post("/", postUser);
// router.put("/:id", updateUser);
// router.delete("/:id", deleteUser);

module.exports = router;
