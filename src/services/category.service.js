const boom = require('@hapi/boom');
const pool = require('../lib/postgres pool');

class CategoryService {

  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
  };

  async find() {
    const query = 'SELECT * FROM categories';
    const response = await this.pool.query(query);
    return response.rows;
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
