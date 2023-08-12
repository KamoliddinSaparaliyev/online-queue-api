const Joi = require("joi");
const { pageSchema, buildSortSchema } = require("../../shared/g-schema");

module.exports.postCenterSchema = {
  body: Joi.object({
    name: Joi.string().required(),
    region: Joi.string().required(),
  }),
};

module.exports.showCenterSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

module.exports.listCenterSchema = {
  query: Joi.object({
    sort: buildSortSchema(["name"]),
    page: pageSchema,
  }),
};

module.exports.patchCenterSchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    name: Joi.string().required(),
    region: Joi.string(),
  }),
};

module.exports.deleteCenterSchmea = {
  params: Joi.object({
    id: Joi.string(),
  }),
};
