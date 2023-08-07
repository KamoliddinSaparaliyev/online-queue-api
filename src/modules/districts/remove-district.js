const { NotFoundError } = require("../../shared/errors");
const District = require("./District");

const removeDistrict = async ({ id }) => {
  const existing = await District.findById(id);

  if (!existing) throw new NotFoundError("District not found");

  return await District.findByIdAndRemove(id);
};
module.exports = removeDistrict;
