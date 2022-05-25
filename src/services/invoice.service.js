const boom = require('@hapi/boom');
const { models} = require('../lib/sequelize');

class InvoiceService {

  constructor() {};

  async find() {
    const response = await models.Invoice.findAll();
    return response;
  };

  async findOne(id) {
    const invoice = await models.Invoice.findByPk(id);
    if(!invoice) {
      throw boom.notFound('Invoice not found');
    }
    return invoice;
  };

  async create(data) {
    const newInvoice = await models.Invoice.create(data);
    return newInvoice;
  }

  async update(id, changes) {
    const invoice = await models.Invoice.findByPk(id);
    if(!invoice) {
      throw boom.notFound('Invoice not found');
    }
    const response = await invoice.update(changes);
    return response;
  };

  async delete(id) {
    const invoice = await models.Invoice.findByPk(id);
    if(!invoice) {
      throw boom.notFound('Invoice not found');
    }
    await invoice.destroy();
    return { id };
  };
};

module.exports = InvoiceService;
