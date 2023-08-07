const City = require("./City");

const listCities = async ({ q, page, sort }) => {
  const { limit = 10, offset = 0 } = page || {};
  const { by = "name", order = "desc" } = sort || {};
  const filter = { region };

  if (q) filter.name = { $regex: q, $options: "i" };

  if (region) filter.region = region;

  const total = await City.countDocuments(filter);
  const cities = await City.find(filter)
    .sort({ [by]: order === "desc" ? -1 : 1 })
    .skip(offset)
    .limit(limit);

  return { total, limit, offset, cities };
};

module.exports = listCities;
