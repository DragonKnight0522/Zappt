const express = require("express");
const router = express.Router();
const controller = require("./search_controller");
const authMiddlware = require("../../middleware/auth.middleware");

/* GET Search page. */
router.route("/").post(authMiddlware, controller.list);

module.exports = router;
