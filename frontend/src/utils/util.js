export const isEmpty = (value) =>
	value === undefined ||
	value === "undefined" ||
	value === null ||
	value === "null" ||
	(typeof value === "object" && Object.keys(value).length === 0) ||
	(typeof value === "string" && value.trim().length === 0);

export const dateFormat = (value) => {
	const date = new Date(value);
	const formattedDate =
		date.getFullYear() +
		"-" +
		("0" + (date.getMonth() + 1)).slice(-2) +
		"-" +
		("0" + date.getDate()).slice(-2);
	return formattedDate;
};
