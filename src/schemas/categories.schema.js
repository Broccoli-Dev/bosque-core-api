const Joi = require('joi');

const id = Joi.string().uuid();
const hamburguesas = Joi.string().min(3);
const platos_fuertes = Joi.string().min(3);
const perros = Joi.string().min(3);
const papas = Joi.string().min(3);
const limonadas = Joi.string().min(3);
const sodas = Joi.string().min(3);
const bebidas = Joi.string().min(3);
const servezas = Joi.string().min(3);
const domicilios = Joi.string().min(3);


const createCategoriesSchema = Joi.object({
        hamburguesas: hamburguesas.required(),
        platos_fuertes: platos_fuertes.required(),
        perros: perros.required(),
        papas: papas.required(),
        limonadas: limonadas.required(),
        sodas: sodas.required(),
        bebidas: bebidas.required(),
        servezas: servezas.required(),
        domicilios: domicilios.required()
});

const updateCategoriesSchema = Joi.object({
        hamburguesas: hamburguesas,
        platos_fuertes: platos_fuertes,
        perros: perros,
        papas: papas,
        limonadas: limonadas,
        sodas: sodas,
        bebidas: bebidas,
        servezas: servezas,
        domicilios: domicilios
});

const getCategoriesSchema = Joi.object({
  id: id
});

module.exports = { createCategoriesSchema, updateCategoriesSchema, getCategoriesSchema }
