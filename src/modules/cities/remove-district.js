const { NotFoundError } = require("../../shared/errors");
const City = require("./City");

const removeCity = async ({ id }) => {
  const existing = await City.findById(id);

  if (!existing) throw new NotFoundError("City not found");

  return await City.findByIdAndRemove(id);
};
module.exports = removeCity;
