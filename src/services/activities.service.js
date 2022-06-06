const boom = require('@hapi/boom');
const { models } = require('../lib/sequelize');

class ActivitiesService {

  constructor(){};

  async find() {
    const response = await models.Activity.findAll();
    return response;
  };

  async findOne(id) {
    const activity = await models.Activity.findByPk(id);
    if(!activity) {
      throw boom.notFound('Activities not found');
    }
    return activity;
  };

  async create(data) {
    const newActivity = await models.Activity.create(data);
    return newActivity;
  }

  async update(id, changes) {
    const activity = await models.Activity.findByPk(id);
    if(!activity) {
      throw boom.notFound('Activities not found');
    }
    const response = await activity.update(changes);
    return response;
  };

  async delete(id) {
    const activity = await models.Activity.findByPk(id);
    if(!activity) {
      throw boom.notFound('Activities not found');
    }
    await activity.destroy();
    return { id };
  };
};

module.exports = ActivitiesService;
