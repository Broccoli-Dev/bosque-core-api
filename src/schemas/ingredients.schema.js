const Joi = require('joi');

const id = Joi.number().integer();
const ingredient_name = Joi.string();

const createIngredientSchema = Joi.object({
  ingredient_name: ingredient_name.required(),
});

const updateIngredientSchema = Joi.object({
  ingredient_name: ingredient_name,
});

const getIngredientSchema = Joi.object({
  id: id.required()
});

module.exports = { createIngredientSchema, updateIngredientSchema, getIngredientSchema }
