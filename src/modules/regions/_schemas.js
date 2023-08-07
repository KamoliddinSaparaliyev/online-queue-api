const Joi = require("joi");
const { pageSchema, buildSortSchema } = require("../../shared/g-schema");

module.exports.postRegionSchema = {
  body: Joi.object({
    name: Joi.string().required()
  }),
};

module.exports.showRegionSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

module.exports.listRegionSchema = {
  query: Joi.object({
    sort: buildSortSchema(["name"]),
    page: pageSchema,
  }),
};

module.exports.patchRegionSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    name: Joi.string().required(),
  }),
};

module.exports.deleteRegionSchmea = {
  params: Joi.object({
    id: Joi.string(),
  }),
};
