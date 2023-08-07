const Joi = require("joi");
const { pageSchema, buildSortSchema } = require("../../shared/g-schema");

module.exports.postDistrictSchema = {
  body: Joi.object({
    name: Joi.string().required(),
    region: Joi.string().required(),
  }),
};

module.exports.showDistrictSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

module.exports.listDistrictSchema = {
  query: Joi.object({
    sort: buildSortSchema(["name"]),
    page: pageSchema,
  }),
};

module.exports.patchDistrictSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    name: Joi.string().required(),
    region: Joi.string(),
  }),
};

module.exports.deleteDistrictSchmea = {
  params: Joi.object({
    id: Joi.string(),
  }),
};
