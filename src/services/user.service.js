const faker = require('faker');

class UserService {

  constructor() {
    this.users = [];
    this.generate();
  };

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        userName: faker.name.firstName(),
        password: faker.lorem.words()
      });
    };
  }


  created() {

  };

  find() {
    return this.users;
  };

  findOne(id) {
    return this.users.find(item => item.id == id);
  };

  update() {

  };

  delete() {

  };
};

module.exports = UserService;
