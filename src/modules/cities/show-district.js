const { NotFoundError } = require("../../shared/errors");
const City = require("./City");

const showCity = async ({ id }) => {
  const city = await City.findById(id);

  if (!city) throw new NotFoundError("City not found");

  return city;
};

module.exports = showCity;
