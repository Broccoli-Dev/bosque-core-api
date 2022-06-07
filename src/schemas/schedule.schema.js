const Joi = require('joi');

const id = Joi.number().integer();
const time_in = Joi.date();
const time_out = Joi.date();
const user_id = Joi.number().integer();

const createScheduleSchema = Joi.object({
  time_in: time_in.required(),
  time_out: time_out.required(),
  user_id: user_id.required()
});

const updateScheduleSchema = Joi.object({
  time_in: time_in,
  time_out: time_out,
  user_id: user_id
});

const getScheduleSchema = Joi.object({
  id: id.required()
});

module.exports = { createScheduleSchema, updateScheduleSchema, getScheduleSchema }
