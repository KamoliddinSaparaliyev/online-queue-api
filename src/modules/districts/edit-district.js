const { NotFoundError } = require("../../shared/errors");
const District = require("./District");

const editDistrict = async ({ id, changes }) => {
  const existing = await District.findOne({ _id: id, is_deleted: false });

  if (!existing) throw new NotFoundError("District not found");

  const updated = District.findByIdAndUpdate(id, { ...changes }, { new: true });

  return updated;
};
module.exports = editDistrict;
