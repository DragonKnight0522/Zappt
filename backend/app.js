var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
require("./config/postgredb");

var foodRouter = require("./routes/food/food_router");
var searchRouter = require("./routes/search/search_router");
var googleRouter = require("./routes/google/google_router");
var authRouter = require("./routes/auth/auth_router");
var usersRouter = require("./routes/users");
var testAPIRouter = require("./routes/testAPI");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());
app.use(cors());

app.use("/api/food", foodRouter);
app.use("/api/search", searchRouter);
app.use("/api/google", googleRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/testAPI", testAPIRouter);

app.use(express.static(path.join(__dirname, "..", "frontend", "build")));
app.use(express.static(path.join(__dirname, "public")));
// For any other routes, serve the React app's index.html
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "..", "frontend", "build", "index.html"));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

app.listen(process.env.PORT || 9000, () => {
	console.log(`Server is running on port ${process.env.PORT || 9000}`);
});

module.exports = app;
