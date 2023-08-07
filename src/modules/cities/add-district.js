const City = require("./City");

const addCity = async (data) => {
  const result = await City.create(data);

  return result;
};

module.exports = addCity;
