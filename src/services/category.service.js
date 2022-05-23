const faker = require('faker');
const boom = require('@hapi/boom');

class CategoryService {

  constructor() {
    this.categories = [];
    this.generate();
  };

  async generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        hamburguesas: faker.lorem.words(),
        platos_fuertes: faker.lorem.words(),
        perros: faker.lorem.words(),
        papas: faker.lorem.words(),
        limonadas: faker.lorem.words(),
        sodas: faker.lorem.words(),
        bebidas: faker.lorem.words(),
        servezas: faker.lorem.words(),
        domicilios: faker.lorem.words(),
      });
    };
  }


  async create(data) {
    const newCategory = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.categories.push(newCategory);
    return newCategory;
  };

  async find() {
    return this.categories;
  };

  async findOne(id) {
    const category = this.categories.find(item => item.id == id);
    if (!category) {
      throw boom.notFound('User not found');
    }
    return category;
  };

  async update(id, changes) {
    const index = this.categories.findIndex(item => item.id == id);
    if (index === -1) {
      throw boom.notFound('User not found');
    }
    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...changes
    }
    return this.categories[index];
  };

  async delete(id) {
    const index = this.categories.findIndex(item => item.id == id);
    if (index === -1) {
      throw boom.notFound('User not found');
    }
    this.categories.splice(index, 1);
    return { id };
  };
};

module.exports = CategoryService;
