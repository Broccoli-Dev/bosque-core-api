const Joi = require('joi');

const id = Joi.number().integer();
const rawMaterial_name = Joi.string();

const createRawMaterialSchema = Joi.object({
  rawMaterial_name: rawMaterial_name.required(),
});

const updateRawMaterialSchema = Joi.object({
  rawMaterial_name: rawMaterial_name,
});

const getRawMaterialSchema = Joi.object({
  id: id.required()
});

module.exports = { createRawMaterialSchema, updateRawMaterialSchema, getRawMaterialSchema }
