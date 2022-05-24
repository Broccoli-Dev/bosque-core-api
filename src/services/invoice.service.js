const boom = require('@hapi/boom');
const pool = require('../lib/postgres pool');

class InvoiceService {

  constructor() {
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
  };

  async find() {
    const query = 'SELECT * FROM invoices';
    const response = await this.pool.query(query);
    return response.rows;
  };

  async findOne(id) {
    const invoice = this.invoices.find(item => item.id == id);
    if (!invoice) {
      throw boom.notFound('User not found');
    }
    return invoice;
  };

  async update(id, changes) {
    const index = this.invoices.findIndex(item => item.id == id);
    if (index === -1) {
      throw boom.notFound('User not found');
    }
    const invoice = this.invoices[index];
    this.invoices[index] = {
      ...invoice,
      ...changes
    }
    return this.invoices[index];
  };

  async delete(id) {
    const index = this.invoices.findIndex(item => item.id == id);
    if (index === -1) {
      throw boom.notFound('User not found');
    }
    this.invoices.splice(index, 1);
    return { id };
  };
};

module.exports = InvoiceService;
