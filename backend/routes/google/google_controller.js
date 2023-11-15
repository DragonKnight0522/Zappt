const db = require("../../config/postgredb");
const { client, locationFields } = require("../../config/googleApi");
const fs = require("fs");
const util = require("util");
const { isEmpty } = require("../../utils/util");

const writeFileAsync = util.promisify(fs.writeFile);

async function saveImage(filePath, imageBuffer) {
  try {
    await writeFileAsync(filePath, imageBuffer);
    console.log("Image saved successfully.");
  } catch (err) {
    console.error("Error saving the image:", err);
  }
}

/*
  @desc Retrieve business information from Google based on the provided ID and save it to the database.
  @param {string} id
 */
async function getBusinessDetailById(req, res, next) {
  try {
    const { id } = req.params;

    let query_str = `SELECT name, address FROM locations WHERE id = '${id}'`;
    const result = await db.query(query_str);
    const location = result[0];
    // get most similar business id by using name and address

    const resPlaceFind = await client.placeAutocomplete({
      params: {
        key: process.env.GOOGLE_MAPS_API_KEY,
        input: `${location.name} at ${location.address}`,
      },
    });

    const predictions = resPlaceFind.data.predictions;
    let longest_description = "";
    let longest_place_id = "";

    predictions.forEach((prediction) => {
      const { description, place_id } = prediction;

      if (description.length > longest_description.length) {
        longest_description = description;
        longest_place_id = place_id;
      }
    });

    // get detailed information based on the place id.

    const resPlaceInfo = await client.placeDetails({
      params: {
        key: process.env.GOOGLE_MAPS_API_KEY,
        place_id: longest_place_id,
        fields: locationFields,
      },
    });

    const data = resPlaceInfo.data.result;

    // get photos and save it as blob with 400 width based on the reference from information
    if (!isEmpty(data.photos)) {
      const resPlacePhoto = await client.placePhoto({
        params: {
          key: process.env.GOOGLE_MAPS_API_KEY,
          photoreference: data.photos[0].photo_reference,
          maxwidth: 400,
        },
        responseType: "arraybuffer",
      });

      // Assuming you already have the ArrayBuffer in 'resPlacePhoto.data'
      const imageArrayBuffer = resPlacePhoto.data;

      // Specify the file path where you want to save the image
      const filePath = `backend/public/images/${data.place_id}.jpg`; // Replace with your desired file path and extension

      // Convert the ArrayBuffer to a Buffer
      const imageBuffer = Buffer.from(imageArrayBuffer);

      // Write the image data to the file
      await saveImage(filePath, imageBuffer);
    }

    let update_query_str = `UPDATE locations SET curbside_pickup = $1, delivery = $2, dine_in = $3, editorial_summary = $4, formatted_address = $5, geometry = $6, international_phone_number = $7, name = $8, opening_hours = $9, place_id = $10, price_level = $11, rating = $12, reservable = $13, reviews = $14, serves_beer = $15, serves_dinner = $16, serves_lunch = $17, serves_vegetarian_food = $18, serves_wine = $19, takeout = $20, map_url = $21, user_ratings_total = $22, website_url = $23, wheelchair_accessible_entrance = $24, photo = $25 WHERE id = $26`;

    const values = [
      data.curbside_pickup,
      data.delivery,
      data.dine_in,
      data.editorial_summary,
      data.formatted_address,
      JSON.stringify(data.geometry),
      data.international_phone_number,
      data.name,
      JSON.stringify(data.opening_hours),
      data.place_id,
      data.price_level,
      data.rating,
      data.reservable,
      JSON.stringify(data.reviews),
      data.serves_beer,
      data.serves_dinner,
      data.serves_lunch,
      data.serves_vegetarian_food,
      data.serves_wine,
      data.takeout,
      data.url,
      data.user_ratings_total,
      data.website,
      data.wheelchair_accessible_entrance,
      `/images/${data.place_id}.jpg`, // Pass the binary data of the photo
      id,
    ];

    await db.query(update_query_str, values);

    res.json("success");
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

module.exports = {
  fetchData: [getBusinessDetailById],
};
