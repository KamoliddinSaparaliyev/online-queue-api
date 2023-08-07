const { NotFoundError } = require("../../shared/errors");
const Region = require("./Region");

const showRegion = async ({ id }) => {
  const region = await Region.findById(id);

  if (!region) throw new NotFoundError("Region not found");

  return region;
};

module.exports = showRegion;
