const { NotFoundError } = require("../../shared/errors");
const Region = require("./Region");

const removeRegion = async ({ id }) => {
  const existing = await Region.findById(id);

  if (!existing) throw new NotFoundError("Region not found");

  return await Region.findByIdAndRemove(id);
};
module.exports = removeRegion;
