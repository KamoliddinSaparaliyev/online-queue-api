const { NotFoundError } = require("../../shared/errors");
const District = require("./District");

const showDistrict = async ({ id }) => {
  const district = await District.findById(id);

  if (!district) throw new NotFoundError("District not found");

  return district;
};

module.exports = showDistrict;
