const boom = require('@hapi/boom');
const { models } = require('../lib/sequelize');

class HeadquartersService {

  constructor(){};

  async find() {
    const response = await models.Headquarter.findAll();
    return response;
  };

  async findOne(id) {
    const headquarters = await models.Headquarter.findByPk(id);
    if(!headquarters) {
      throw boom.notFound('Headquarters not found');
    }
    return headquarters;
  };

  async create(data) {
    const newHeadquarters = await models.Headquarter.create(data);
    return newHeadquarters;
  }

  async update(id, changes) {
    const headquarters = await models.Headquarter.findByPk(id);
    if(!headquarters) {
      throw boom.notFound('Headquarters not found');
    }
    const response = await headquarters.update(changes);
    return response;
  };

  async delete(id) {
    const headquarters = await models.Headquarter.findByPk(id);
    if(!headquarters) {
      throw boom.notFound('Headquarters not found');
    }
    await headquarters.destroy();
    return { id };
  };
};

module.exports = HeadquartersService;
