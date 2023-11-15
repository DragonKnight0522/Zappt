const express = require("express");
const router = express.Router();
const controller = require("./google_controller");

/* GET Business Info from google and Save it to database page. */
router.route("/:id").get(controller.fetchData);

module.exports = router;
