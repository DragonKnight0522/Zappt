const connectString = process.env.CONNECTION_STRING;
const pgp = require("pg-promise")();
const db = pgp(connectString);

process.on("exit", () => {
	db.$pool
		.end()
		.then(() => console.log("close connection"))
		.catch(() => console.log("db connection closed closing error"));
});

module.exports = db;
