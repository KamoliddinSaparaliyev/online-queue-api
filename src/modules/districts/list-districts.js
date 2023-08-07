const District = require("./District");

const listDistricts = async ({ q, page, sort }) => {
  const { limit = 10, offset = 0 } = page || {};
  const { by = "name", order = "desc" } = sort || {};
  const filter = { region };

  if (q) filter.name = { $regex: q, $options: "i" };

  if (region) filter.region = region;

  const total = await District.countDocuments(filter);
  const districts = await District.find(filter)
    .sort({ [by]: order === "desc" ? -1 : 1 })
    .skip(offset)
    .limit(limit);

  return { total, limit, offset, districts };
};

module.exports = listDistricts;
