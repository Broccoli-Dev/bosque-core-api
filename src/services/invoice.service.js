const faker = require('faker');

class InvoiceService {

  constructor() {
    this.invoices = [];
    this.generate();
  };

  generate() {
    const limit = 100;
  for (let index = 0; index < limit; index++) {
    this.invoices.push({
      id: faker.datatype.uuid(),
      invoice_number: parseInt(faker.commerce.price(), 10),
      date: faker.date.past(),
      time: faker.time.recent(),
      chair: Math.random(),
      client: faker.name.firstName(),
      order_id: faker.datatype.uuid(),
      sub_total: parseInt(faker.commerce.price(), 10),
      discount: parseInt(faker.commerce.price(), 10),
      total: parseInt(faker.commerce.price(), 10),
      payment: faker.lorem.word()
    });
    };
  }


  create(data) {
    const newInvoice = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.invoices.push(newInvoice);
    return newInvoice;
  };

  find() {
    return this.invoices;
  };

  findOne(id) {
    return this.invoices.find(item => item.id == id);
  };

  update(id, changes) {
    const index = this.invoices.findIndex(item => item.id == id);
    if (index === -1) {
      throw new Error('Invoice Not Found')
    }
    const invoice = this.invoices[index];
    this.invoices[index] = {
      ...invoice,
      ...changes
    }
    return this.invoices[index];
  };

  delete(id) {
    const index = this.invoices.findIndex(item => item.id == id);
    if (index === -1) {
      throw new Error('Invoice Not Found')
    }
    this.invoices.splice(index, 1);
    return { id };
  };
};

module.exports = InvoiceService;
