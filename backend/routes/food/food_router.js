const express = require("express");
const router = express.Router();
// require("dotenv").config();
const controller = require("./food_controller");

/* GET food page. */
router
	.route("/")
	.get(controller.list)
	.post(controller.create)
	.put(controller.update)
	.delete(controller.destroy);

// Add search route
router.route("/search").post(controller.search);

router.route("/:id").get(controller.detail);

module.exports = router;
