const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const password = Joi.string().min(3);
const document = Joi.number().integer();
const cel = Joi.number().integer();
const email = Joi.string();
const salary = Joi.number().integer();
const address = Joi.string();
const date_birth = Joi.date();

const createUserSchema = Joi.object({
  name: name.required(),
  password: password.required(),
  document:document.required(),
  cel: cel.required(),
  email: email.required(),
  salary: salary.required(),
  address: address.required(),
  date_birth: date_birth.required()
});

const updateUserSchema = Joi.object({
  name: name,
  password: password,
  cel: cel,
  email: email,
  salary: salary,
  address: address,
  date_birth: date_birth
});

const getUserSchema = Joi.object({
  id: id.required()
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
