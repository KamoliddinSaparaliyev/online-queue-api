const { NotFoundError } = require("../../shared/errors");
const Center = require("./Center");

const removeCenter = async ({ id }) => {
  const existing = await Center.findById(id);

  if (!existing) throw new NotFoundError("Center not found");

  return await Center.findByIdAndRemove(id);
};
module.exports = removeCenter;
