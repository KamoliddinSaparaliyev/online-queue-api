const { NotFoundError } = require("../../shared/errors");
const Region = require("./Region");

const editRegion = async ({ id, changes }) => {
  const existing = await Region.findOne({ _id: id, is_deleted: false });

  if (!existing) throw new NotFoundError("Region not found");

  const updated = Region.findByIdAndUpdate(id, { ...changes }, { new: true });

  return updated;
};
module.exports = editRegion;
