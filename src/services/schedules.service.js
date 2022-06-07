const boom = require('@hapi/boom');
const { models } = require('../lib/sequelize');

class SchedulesService {

  constructor(){};

  async find() {
    const response = await models.Schedule.findAll();
    return response;
  };

  async findOne(id) {
    const schedule = await models.Schedule.findByPk(id);
    if(!schedule) {
      throw boom.notFound('Schedules not found');
    }
    return schedule;
  };

  async create(data) {
    const newSchedule = await models.Schedule.create(data);
    return newSchedule;
  }

  async update(id, changes) {
    const schedule = await models.Schedule.findByPk(id);
    if(!schedule) {
      throw boom.notFound('Schedules not found');
    }
    const response = await schedule.update(changes);
    return response;
  };

  async delete(id) {
    const schedule = await models.Schedule.findByPk(id);
    if(!schedule) {
      throw boom.notFound('Schedules not found');
    }
    await schedule.destroy();
    return { id };
  };
};

module.exports = SchedulesService;
