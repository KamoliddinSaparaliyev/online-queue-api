const District = require("./District");

const addDistrict = async (data) => {
  const result = await District.create(data);

  return result;
};

module.exports = addDistrict;
