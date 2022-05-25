const boom = require('@hapi/boom');
const { models } = require('../lib/sequelize');

class UserService {

  constructor(){};

  async find() {
    const response = await models.User.findAll();
    return response;
  };

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if(!user) {
      throw boom.notFound('User not found');
    }
    return user;
  };

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async update(id, changes) {
    const user = await models.User.findByPk(id);
    if(!user) {
      throw boom.notFound('User not found');
    }
    const response = await user.update(changes);
    return response;
  };

  async delete(id) {
    const user = await models.User.findByPk(id);
    if(!user) {
      throw boom.notFound('User not found');
    }
    await user.destroy();
    return { id };
  };
};

module.exports = UserService;
