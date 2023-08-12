const { NotFoundError } = require("../../shared/errors");
const Center = require("./Center");

const showCenter = async ({ id }) => {
  const district = await Center.findById(id);

  if (!district) throw new NotFoundError("Center not found");

  return district;
};

module.exports = showCenter;
