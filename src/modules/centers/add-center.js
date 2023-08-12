const Center = require("./Center");

const addCenter = async (data) => {
  const result = await Center.create(data);

  return result;
};

module.exports = addCenter;
