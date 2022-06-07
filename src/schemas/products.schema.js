const Joi = require('joi');

const id = Joi.number().integer();
const product_name = Joi.string();
const category_id = Joi.number().integer();

const createProductSchema = Joi.object({
  product_name: product_name.required(),
  category_id: category_id.required()
});

const updateProductSchema = Joi.object({
  product_name: product_name,
  category_id: category_id
});

const getProductSchema = Joi.object({
  id: id.required()
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
