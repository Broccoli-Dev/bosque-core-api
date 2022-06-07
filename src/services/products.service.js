const boom = require('@hapi/boom');
const { models } = require('../lib/sequelize');

class ProductsService {

  constructor(){};

  async find() {
    const response = await models.Product.findAll();
    return response;
  };

  async findOne(id) {
    const product = await models.Product.findByPk(id);
    if(!product) {
      throw boom.notFound('Products not found');
    }
    return Product;
  };

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async update(id, changes) {
    const product = await models.Product.findByPk(id);
    if(!product) {
      throw boom.notFound('Products not found');
    }
    const response = await product.update(changes);
    return response;
  };

  async delete(id) {
    const product = await models.Product.findByPk(id);
    if(!product) {
      throw boom.notFound('Products not found');
    }
    await product.destroy();
    return { id };
  };
};

module.exports = ProductsService;
