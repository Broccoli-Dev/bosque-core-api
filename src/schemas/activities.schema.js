const Joi = require('joi');

const id = Joi.number().integer();
const description = Joi.string();
const duration = Joi.number();

const createActivitySchema = Joi.object({
  description: description.required(),
  duration: duration
});

const updateActivitySchema = Joi.object({
  description: description,
  duration: duration
});

const getActivitySchema = Joi.object({
  id: id.required()
});

module.exports = { createActivitySchema, updateActivitySchema, getActivitySchema }
