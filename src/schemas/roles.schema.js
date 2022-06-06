const Joi = require('joi');

const id = Joi.number().integer();
const role = Joi.string();

const createRoleSchema = Joi.object({
  role: role.required()
});

const updateRoleSchema = Joi.object({
  role: role
});

const getRoleSchema = Joi.object({
  id: id.required()
});

module.exports = { createRoleSchema, updateRoleSchema, getRoleSchema }
