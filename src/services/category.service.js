const boom = require('@hapi/boom');
const { models } = require('../lib/sequelize');

class CategoryService {

  constructor() {};

  async find() {
    const response = await models.Category.findAll();
    return response;
  };

  async findOne(id) {
    const category = await models.Category.findByPk(id);
    if(!category) {
      throw boom.notFound('Category not found');
    }
    return category;
  };

  async create(data) {
    const newCategory = await models.Category.create(data);
    return newCategory;
  }

  async update(id, changes) {
    const category = await models.Category.findByPk(id);
    if(!category) {
      throw boom.notFound('Category not found');
    }
    const response = await category.update(changes);
    return response;
  };

  async delete(id) {
    const category = await models.Category.findByPk(id);
    if(!category) {
      throw boom.notFound('Category not found');
    }
    await category.destroy();
    return { id };
  };
};

module.exports = CategoryService;
