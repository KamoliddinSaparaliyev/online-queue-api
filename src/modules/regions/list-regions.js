const Region = require("./Region");

const listRegions = async ({ q, page, sort }) => {
  const { limit = 10, offset = 0 } = page || {};
  const { by = "name", order = "desc" } = sort || {};
  const filter = {};
  if (q) {
    filter.name = { $regex: q, $options: "i" };
  }
 
  const total = await Region.countDocuments(filter);
  const regions = await Region.find(filter)
    .sort({ [by]: order === "desc" ? -1 : 1 })
    .skip(offset)
    .limit(limit);

  return { total, limit, offset, regions };
};

module.exports = listRegions;
