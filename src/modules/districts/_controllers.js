const express = require("express");
const addDistrict = require("./add-district");
const httpValidator = require("../../shared/http-validator");
const {
  postDistrictSchema,
  patchDistrictSchema,
  deleteDistrictSchmea,
  showDistrictSchema,
  listDistrictSchema,
} = require("./_schemas");
const showDistrict = require("./show-district");
const removeDistrict = require("./remove-district");
const listDistricts = require("./list-districts");
const editDistrict = require("./edit-district");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postDistrict = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postDistrictSchema);

    const result = await addDistrict(req.body);
  
    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const patchDistrict = async (req, res, next) => {
  try {
    httpValidator({ body: req.body, params: req.params }, patchDistrictSchema);

    const result = await editDistrict({ id: req.params.id, changes: req.body });

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getDistricts = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, listDistrictSchema);
    const result = await listDistricts(req.query);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getDistrict = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showDistrictSchema);

    const result = await showDistrict(req.params);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteDistrict = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteDistrictSchmea);

    const result = await removeDistrict(req.params);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postDistrict,
  getDistrict,
  getDistricts,
  patchDistrict,
  deleteDistrict,
};
