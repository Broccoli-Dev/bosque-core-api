const boom = require('@hapi/boom');
const pool = require('../lib/postgres pool');

class UserService {

  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
  };

  async find() {
    const query = 'SELECT * FROM users';
    const response = await this.pool.query(query);
    return response.rows;
  };

  async findOne(id) {
    const user = this.users.find(item => item.id == id);
    if(!user){
      throw boom.notFound('User not found');
    }
    if (user.isBlock) {
      throw boom.conflict('User is block');
    }
    return user;
  };

  async update(id, changes) {
    const index = this.users.findIndex(item => item.id == id);
    if (index === -1) {
      throw boom.notFound('User not found');
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes
    }
    return this.users[index];
  };

  async delete(id) {
    const index = this.users.findIndex(item => item.id == id);
    if (index === -1) {
      throw boom.notFound('User not found');
    }
    this.users.splice(index, 1);
    return { id };
  };
};

module.exports = UserService;
