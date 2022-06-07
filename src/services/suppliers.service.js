const boom = require('@hapi/boom');
const { models } = require('../lib/sequelize');

class SuppliersService {

  constructor(){};

  async find() {
    const response = await models.Supplier.findAll();
    return response;
  };

  async findOne(id) {
    const supplier = await models.Supplier.findByPk(id);
    if(!supplier) {
      throw boom.notFound('Supplier not found');
    }
    return supplier;
  };

  async create(data) {
    const newSupplier = await models.Supplier.create(data);
    return newSupplier;
  }

  async update(id, changes) {
    const supplier = await models.Supplier.findByPk(id);
    if(!supplier) {
      throw boom.notFound('Supplier not found');
    }
    const response = await supplier.update(changes);
    return response;
  };

  async delete(id) {
    const supplier = await models.Supplier.findByPk(id);
    if(!supplier) {
      throw boom.notFound('Supplier not found');
    }
    await supplier.destroy();
    return { id };
  };
};

module.exports = SuppliersService;
