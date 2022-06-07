const boom = require('@hapi/boom');
const { models } = require('../lib/sequelize');

class OrdersService {

  constructor(){};

  async find() {
    const response = await models.Order.findAll();
    return response;
  };

  async findOne(id) {
    const order = await models.Order.findByPk(id);
    if(!order) {
      throw boom.notFound('Orders not found');
    }
    return order;
  };

  async create(data) {
    const newOrder = await models.Order.create(data);
    return newOrder;
  }

  async update(id, changes) {
    const order = await models.Order.findByPk(id);
    if(!order) {
      throw boom.notFound('Orders not found');
    }
    const response = await order.update(changes);
    return response;
  };

  async delete(id) {
    const order = await models.Order.findByPk(id);
    if(!order) {
      throw boom.notFound('Orders not found');
    }
    await order.destroy();
    return { id };
  };
};

module.exports = OrdersService;
