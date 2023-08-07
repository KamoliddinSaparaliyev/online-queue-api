const Region = require("./Region");

const addRegion = async (data) => {
  const result = await Region.create(data);

  return result;
};

module.exports = addRegion;
