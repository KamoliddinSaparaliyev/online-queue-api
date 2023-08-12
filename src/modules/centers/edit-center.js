const { NotFoundError } = require("../../shared/errors");
const Center = require("./Center");

const editCenter = async ({ id, changes }) => {
  const existing = await Center.findOne({ _id: id, is_deleted: false });

  if (!existing) throw new NotFoundError("Center not found");

  const updated = Center.findByIdAndUpdate(id, { ...changes }, { new: true });

  return updated;
};
module.exports = editCenter;
