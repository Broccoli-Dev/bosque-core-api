const Joi = require('joi');

const id = Joi.number().integer();
const product = Joi.string();
const cost = Joi.number().integer();
const amount = Joi.number().integer();
const subtotal = Joi.number().integer();

const createOrderSchema = Joi.object({
  product: product.required(),
  cost: cost.required(),
  amount: amount.required(),
  subtotal: subtotal.required()
});

const updateOrderSchema = Joi.object({
  product: product,
  cost: cost,
  amount: amount,
  subtotal: subtotal
});

const getOrderSchema = Joi.object({
  id: id.required()
});

module.exports = { createOrderSchema, updateOrderSchema, getOrderSchema }
