const faker = require('faker');

class CategoryService {

  constructor() {
    this.categories = [];
    this.generate();
  };

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      categories.push({
        id: aker.datatype.uuid(),
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


  created() {

  };

  find() {
    return this.categories;
  };

  findOne(id) {
    return this.categories.find(item => item.id == id);
  };

  update() {

  };

  delete() {

  };
};

module.exports = CategoryService;
