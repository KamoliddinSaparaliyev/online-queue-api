const Joi = require("joi");
const { pageSchema, buildSortSchema } = require("../../shared/g-schema");

module.exports.postCitySchema = {
  body: Joi.object({
    name: Joi.string().required(),
    region: Joi.string().required(),
  }),
};

module.exports.showCitySchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
};

module.exports.listCitySchema = {
  query: Joi.object({
    sort: buildSortSchema(["name"]),
    page: pageSchema,
  }),
};

module.exports.patchCitySchema = {
  params: Joi.object({
    id: Joi.string(),
  }),
  body: Joi.object({
    name: Joi.string().required(),
    region: Joi.string(),
  }),
};

module.exports.deleteCitySchmea = {
  params: Joi.object({
    id: Joi.string(),
  }),
};
