const boom = require('@hapi/boom');
const { models } = require('../lib/sequelize');

class RawMaterialsService {

  constructor(){};

  async find() {
    const response = await models.RawMaterial.findAll();
    return response;
  };

  async findOne(id) {
    const rawMaterial = await models.RawMaterial.findByPk(id);
    if(!rawMaterial) {
      throw boom.notFound('RawMaterials not found');
    }
    return rawMaterial;
  };

  async create(data) {
    const newRawMaterial = await models.RawMaterial.create(data);
    return newRawMaterial;
  }

  async update(id, changes) {
    const rawMaterial = await models.RawMaterial.findByPk(id);
    if(!rawMaterial) {
      throw boom.notFound('RawMaterials not found');
    }
    const response = await rawMaterial.update(changes);
    return response;
  };

  async delete(id) {
    const rawMaterial = await models.RawMaterial.findByPk(id);
    if(!rawMaterial) {
      throw boom.notFound('RawMaterials not found');
    }
    await rawMaterial.destroy();
    return { id };
  };
};

module.exports = RawMaterialsService;
