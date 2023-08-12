const Center = require("./Center");

const listCenters = async ({ q, page, sort }) => {
  const { limit = 10, offset = 0 } = page || {};
  const { by = "name", order = "desc" } = sort || {};
  const filter = { region };

  if (q) filter.name = { $regex: q, $options: "i" };

  if (region) filter.region = region;

  const total = await Center.countDocuments(filter);
  const centers = await Center.find(filter)
    .sort({ [by]: order === "desc" ? -1 : 1 })
    .skip(offset)
    .limit(limit);

  return { total, limit, offset, centers };
};

module.exports = listCenters;
