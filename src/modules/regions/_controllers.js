const express = require("express");
const addRegion = require("./add-region");
const httpValidator = require("../../shared/http-validator");
const {
  postRegionSchema,
  patchRegionSchema,
  deleteRegionSchmea,
  showRegionSchema,
  listRegionSchema,
} = require("./_schemas");
const showRegion = require("./show-region");
const removeRegion = require("./remove-region");
const listRegions = require("./list-regions");
const editRegion = require("./edit-region");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postRegion = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postRegionSchema);

    const result = await addRegion(req.body);
  
    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const patchRegion = async (req, res, next) => {
  try {
    httpValidator({ body: req.body, params: req.params }, patchRegionSchema);

    const result = await editRegion({ id: req.params.id, changes: req.body });

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getRegions = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, listRegionSchema);
    const result = await listRegions(req.query);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getRegion = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showRegionSchema);

    const result = await showRegion(req.params);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteRegion = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteRegionSchmea);

    const result = await removeRegion(req.params);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postRegion,
  getRegion,
  getRegions,
  patchRegion,
  deleteRegion,
};
