const Joi = require('joi');

const id = Joi.string().uuid();
const invoice_number = Joi.number().integer();
const date = Joi.date();
const time = Joi.date();
const chair = Joi.number().integer();
const client = Joi.string().min(3);
const order_id = Joi.string().uuid();
const sub_total = Joi.number().integer();
const discount = Joi.number().integer();
const total = Joi.number().integer();
const payment = Joi.string().min(3);


const createInvoiceSchema = Joi.object({
  invoice_number: invoice_number.required(),
  date: date.required(),
  time: time.required(),
  chair: chair.required(),
  client: client.required(),
  order_id: order_id.required(),
  sub_total: sub_total.required(),
  discount: discount.required(),
  total: total.required(),
  payment: payment.required()
});

const updateInvoiceSchema = Joi.object({
  invoice_number: invoice_number,
  date: date,
  time: time,
  chair: chair,
  client: client,
  order_id: order_id,
  sub_total: sub_total,
  discount: discount,
  total: total,
  payment: payment
});

const getInvoiceSchema = Joi.object({
  id: id
});

module.exports = { createInvoiceSchema, updateInvoiceSchema, getInvoiceSchema }
