const boom = require('@hapi/boom');
const { models } = require('../lib/sequelize');

class IngredientsService {

  constructor(){};

  async find() {
    const response = await models.Ingredient.findAll();
    return response;
  };

  async findOne(id) {
    const ingredient = await models.Ingredient.findByPk(id);
    if(!ingredient) {
      throw boom.notFound('Ingredients not found');
    }
    return Ingredient;
  };

  async create(data) {
    const newIngredient = await models.Ingredient.create(data);
    return newIngredient;
  }

  async update(id, changes) {
    const ingredient = await models.Ingredient.findByPk(id);
    if(!ingredient) {
      throw boom.notFound('Ingredients not found');
    }
    const response = await ingredient.update(changes);
    return response;
  };

  async delete(id) {
    const ingredient = await models.Ingredient.findByPk(id);
    if(!ingredient) {
      throw boom.notFound('Ingredients not found');
    }
    await ingredient.destroy();
    return { id };
  };
};

module.exports = IngredientsService;
