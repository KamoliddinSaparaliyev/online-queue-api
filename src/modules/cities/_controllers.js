const express = require("express");
const addCity = require("./add-city");
const httpValidator = require("../../shared/http-validator");
const {
  postCitySchema,
  patchCitySchema,
  deleteCitySchmea,
  showCitySchema,
  listCitySchema,
} = require("./_schemas");
const showCity = require("./show-city");
const removeCity = require("./remove-city");
const listCities = require("./list-cities");
const editCity = require("./edit-city");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postCity = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postCitySchema);

    const result = await addCity(req.body);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const patchCity = async (req, res, next) => {
  try {
    httpValidator({ body: req.body, params: req.params }, patchCitySchema);

    const result = await editCity({ id: req.params.id, changes: req.body });

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getCities = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, listCitySchema);
    const result = await listCities(req.query);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getCity = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showCitySchema);

    const result = await showCity(req.params);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteCity = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteCitySchmea);

    const result = await removeCity(req.params);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postCity,
  getCity,
  getCities,
  patchCity,
  deleteCity,
};
