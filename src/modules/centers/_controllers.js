const express = require("express");
const addCenter = require("./add-district");
const httpValidator = require("../../shared/http-validator");
const {
  postCenterSchema,
  patchCenterSchema,
  deleteCenterSchmea,
  showCenterSchema,
  listCenterSchema,
} = require("./_schemas");
const showCenter = require("./show-district");
const removeCenter = require("./remove-district");
const listCenters = require("./list-centers");
const editCenter = require("./edit-district");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postCenter = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postCenterSchema);

    const result = await addCenter(req.body);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const patchCenter = async (req, res, next) => {
  try {
    httpValidator({ body: req.body, params: req.params }, patchCenterSchema);

    const result = await editCenter({ id: req.params.id, changes: req.body });

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getCenters = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, listCenterSchema);
    const result = await listCenters(req.query);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const getCenter = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showCenterSchema);

    const result = await showCenter(req.params);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const deleteCenter = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteCenterSchmea);

    const result = await removeCenter(req.params);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postCenter,
  getCenter,
  getCenters,
  patchCenter,
  deleteCenter,
};
