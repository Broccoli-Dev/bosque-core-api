const boom = require('@hapi/boom');
const { models } = require('../lib/sequelize');

class RolesService {

  constructor(){};

  async find() {
    const response = await models.Role.findAll();
    return response;
  };

  async findOne(id) {
    const Role = await models.Role.findByPk(id);
    if(!Role) {
      throw boom.notFound('Roles not found');
    }
    return Role;
  };

  async create(data) {
    const newRole = await models.Role.create(data);
    return newRole;
  }

  async update(id, changes) {
    const Role = await models.Role.findByPk(id);
    if(!Role) {
      throw boom.notFound('Roles not found');
    }
    const response = await Role.update(changes);
    return response;
  };

  async delete(id) {
    const Role = await models.Role.findByPk(id);
    if(!Role) {
      throw boom.notFound('Roles not found');
    }
    await Role.destroy();
    return { id };
  };
};

module.exports = RolesService;
