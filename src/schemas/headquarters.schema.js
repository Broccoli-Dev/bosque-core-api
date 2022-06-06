const Joi = require('joi');

const id = Joi.number().integer();
const nit = Joi.number().integer();
const name = Joi.string();
const address = Joi.string();
const regime = Joi.string();

const createHeadquarterSchema = Joi.object({
  nit: nit.required(),
  name: name.required(),
  address: address.required(),
  regime: regime.required(),
});

const updateHeadquarterSchema = Joi.object({
  nit: nit,
  name: name,
  address: address,
  regime: regime
});

const getHeadquarterSchema = Joi.object({
  id: id
});

module.exports = { createHeadquarterSchema, updateHeadquarterSchema, getHeadquarterSchema }
