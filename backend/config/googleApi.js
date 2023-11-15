const { Client } = require("@googlemaps/google-maps-services-js");

const client = new Client({});

const locationFields = [
	"curbside_pickup",
	"delivery",
	"dine_in",
	"editorial_summary",
	"formatted_address",
	"geometry",
	"international_phone_number",
	"name",
	"opening_hours",
	"photos",
	"place_id",
	"price_level",
	"rating",
	"reservable",
	"reviews",
	"serves_beer",
	"serves_dinner",
	"serves_lunch",
	"serves_vegetarian_food",
	"serves_wine",
	"takeout",
	"url",
	"user_ratings_total",
	"website",
	"wheelchair_accessible_entrance",
];

module.exports = { client, locationFields };
