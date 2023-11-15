const express = require("express");
const router = express.Router();
const controller = require("./auth_controller");
const authMiddlware = require("../../middleware/auth.middleware");

/* Post auth api here */

router.route("/signIn").post(controller.signIn);

router.route("/signUp").post(controller.signUp);

router.route("/googleSign").post(controller.googleSign);

router.route("/intake").post(authMiddlware, controller.updateIntake);

router.route("/:id").get(controller.detail);

router.route("/forget-password").post(controller.forgetPassword);

router.route("/reset-password").post(controller.resetPassword);

module.exports = router;
