const Joi = require('joi');

const id = Joi.number().integer();
const burguers = Joi.string().min(3);
const strong_plates = Joi.string().min(3);
const hot_dogs = Joi.string().min(3);
const french_fries = Joi.string().min(3);
const limonades = Joi.string().min(3);
const sodas = Joi.string().min(3);
const beverages = Joi.string().min(3);
const berrs = Joi.string().min(3);
const domi = Joi.string().min(3);


const createCategoriesSchema = Joi.object({
        burguers: burguers.required(),
        strong_plates: strong_plates.required(),
        hot_dogs: hot_dogs.required(),
        french_fries: french_fries.required(),
        limonades: limonades.required(),
        sodas: sodas.required(),
        beverages: beverages.required(),
        berrs: berrs.required(),
        domi: domi.required()
});

const updateCategoriesSchema = Joi.object({
        burguers: burguers,
        strong_plates: strong_plates,
        hot_dogs: hot_dogs,
        french_fries: french_fries,
        limonades: limonades,
        sodas: sodas,
        beverages: beverages,
        berrs: berrs,
        domi: domi
});

const getCategoriesSchema = Joi.object({
  id: id
});

module.exports = { createCategoriesSchema, updateCategoriesSchema, getCategoriesSchema }
