const db = require("../../config/postgredb");

async function getSearchList(req, res, next) {
  const { id } = req.user;
  const { criteria, excCriteria } = req.body;

  let query_str = "SELECT name, address, editorial_summary, photo, id, (";

  // Build the part of the query that calculates the score.
  for (let key in criteria) {
    const value = criteria[key] || [];
    if (value.length < 1) continue;
    const query_fields = value.map(
      (item) =>
        `(CASE WHEN '${item}' = ANY("${key}"::text[]) THEN 1 ELSE 0 END) + `
    );
    query_str += query_fields.join(" ");
  }
  // Calculate for the selection exclusion criteria
  for (let key in excCriteria) {
    const value = excCriteria[key] || [];
    const query_fields = value.map(
      (item) =>
        `(CASE WHEN '${item}' = ANY("${key}"::text[]) THEN -1 ELSE 0 END) + `
    );
    query_str += query_fields.join(" ");
  }
  query_str += "0) AS score FROM locations ORDER BY score DESC LIMIT 15;";

  try {
    const result = await db.query(query_str);

    const top5results = result.length > 5 ? result.slice(0, 5) : result;
    const top5ids = top5results.map((obj) => obj.id);

    const searches_query =
      'INSERT INTO "searchRef" ("user", "criteria", "excCriteria", result, time) VALUES ($1, $2, $3, $4, $5)';
    const searches_values = [id, criteria, excCriteria, top5ids, new Date()];
    await db.query(searches_query, searches_values);

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

module.exports = {
  list: [getSearchList],
};
