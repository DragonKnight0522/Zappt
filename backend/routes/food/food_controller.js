const db = require("../../config/postgredb");

async function getFood(req, res, next) {
  try {
    const result = await db.query(
      'select name, address, ambiance, games, mixology, "beerCost", "drinkCost", sports, "offersFood", events, "close2Others", "happyHour", dancing, "barMusic", "typesOfSports", "dogFriendly", amenities, parking, neighborhood, "drinkSpecialties", time2visit, id from locations'
    );
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

async function createFood(req, res, next) {
  const {
    ambiance,
    games,
    mixology,
    name,
    address,
    beerCost,
    drinkCost,
    sports,
    offersFood,
    events,
    close2Others,
    happyHour,
    dancing,
    barMusic,
    typesOfSports,
    dogFriendly,
    amenities,
    parking,
    neighborhood,
    drinkSpecialties,
    time2visit,
    id,
  } = req.body.data;
  const query = `INSERT INTO locations (ambiance, games, mixology, name, address, "beerCost", "drinkCost", sports, "offersFood", events, "close2Others", "happyHour", dancing, "barMusic", "typesOfSports", "dogFriendly", amenities, parking, neighborhood, "drinkSpecialties", time2visit, id)
               VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)`;

  const values = [
    ambiance,
    games,
    mixology,
    name,
    address,
    beerCost,
    drinkCost,
    sports,
    offersFood,
    events,
    close2Others,
    happyHour,
    dancing,
    barMusic,
    typesOfSports,
    dogFriendly,
    amenities,
    parking,
    neighborhood,
    drinkSpecialties,
    time2visit,
    id,
  ];

  try {
    const result = await db.query(query, values);
    res.json("Sucessfully Added!");
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

async function updateFood(req, res, next) {
  const {
    ambiance,
    games,
    mixology,
    name,
    address,
    beerCost,
    drinkCost,
    sports,
    offersFood,
    events,
    close2Others,
    happyHour,
    dancing,
    barMusic,
    typesOfSports,
    dogFriendly,
    amenities,
    parking,
    neighborhood,
    drinkSpecialties,
    time2visit,
    id,
  } = req.body.data;

  const updateQuery = `UPDATE locations SET ambiance=$1, games=$2, mixology=$3, name=$4, address=$5, "beerCost"=$6, "drinkCost"=$7, sports=$8, "offersFood"=$9, events=$10, "close2Others"=$11, "happyHour"=$12, dancing=$13, "barMusic"=$14, "typesOfSports"=$15, "dogFriendly"=$16, amenities=$17, parking=$18, neighborhood=$19, "drinkSpecialties"=$20, time2visit=$21 WHERE id=$22`;

  const values = [
    ambiance,
    games,
    mixology,
    name,
    address,
    beerCost,
    drinkCost,
    sports,
    offersFood,
    events,
    close2Others,
    happyHour,
    dancing,
    barMusic,
    typesOfSports,
    dogFriendly,
    amenities,
    parking,
    neighborhood,
    drinkSpecialties,
    time2visit,
    id,
  ];

  try {
    await db.query(updateQuery, values);

    res.json("Sucessfully updated!");
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

async function deleteFood(req, res, next) {
  const { id } = req.body.data;

  const queryString = `delete from locations WHERE id='${id}'`;
  try {
    const result = await db.query(queryString);
    res.json("Sucessfully delete!");
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

async function searchFood(req, res, next) {
  const sorters = Object.entries(req.body.sort);
  const searchKey = req.body.search;
  const page = req.body.page;
  const pageSize = 10;
  const offset = (page - 1) * pageSize;

  let sqlQuery =
    'SELECT id, name, address, ambiance, games, mixology, "beerCost", "drinkCost", sports, "offersFood", events, "close2Others", "happyHour", dancing, "barMusic", "typesOfSports", "dogFriendly", amenities, parking, neighborhood, "drinkSpecialties", time2visit, place_id FROM locations ';
  let countQuery = "SELECT COUNT(*) FROM locations ";

  if (searchKey) {
    sqlQuery += ` WHERE (name ILIKE '%${searchKey}%' OR address ILIKE '%${searchKey}%') `;
    countQuery += ` WHERE (name ILIKE '%${searchKey}%' OR address ILIKE '%${searchKey}%') `;
  }

  if (sorters.length > 0) sqlQuery += " ORDER BY ";
  sorters.forEach(([key, val], index) => {
    sqlQuery += ` ${index > 0 ? "," : ""} "${key}" ${val ? "ASC" : "DESC"} `;
  });

  sqlQuery += ` LIMIT ${pageSize} OFFSET ${offset}`;

  try {
    const count_result = await db.query(countQuery);
    const data_result = await db.query(sqlQuery);
    res.json({ total: count_result[0].count, data: data_result });
  } catch (err) {
    res.status(500).send(err);
  }
}

async function getFoodDetailByID(req, res, next) {
  const { id } = req.params;
  let sqlQuery = `SELECT * FROM locations WHERE id = '${id}'`;
  try {
    const result = await db.query(sqlQuery);
    res.json(result[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

module.exports = {
  list: [getFood],
  create: [createFood],
  update: [updateFood],
  destroy: [deleteFood],
  search: [searchFood],
  detail: [getFoodDetailByID],
};
