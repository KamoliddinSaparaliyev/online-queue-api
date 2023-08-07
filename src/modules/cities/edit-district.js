const { NotFoundError } = require("../../shared/errors");
const City = require("./City");

const editCity = async ({ id, changes }) => {
  const existing = await City.findOne({ _id: id, is_deleted: false });

  if (!existing) throw new NotFoundError("City not found");

  const updated = City.findByIdAndUpdate(id, { ...changes }, { new: true });

  return updated;
};
module.exports = editCity;
