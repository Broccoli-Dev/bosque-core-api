const Joi = require('joi');

const id = Joi.number().integer();
const supplier_name = Joi.string();
const tel = Joi.number();

const createSupplierSchema = Joi.object({
  supplier_name: supplier_name.required(),
  tel: tel.required()
});

const updateSupplierSchema = Joi.object({
  supplier_name: supplier_name,
  tel: tel
});

const getSupplierSchema = Joi.object({
  id: id.required()
});

module.exports = { createSupplierSchema, updateSupplierSchema, getSupplierSchema }
