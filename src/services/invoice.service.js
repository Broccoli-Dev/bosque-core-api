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


  created() {

  };

  find() {
    return this.invoices;
  };

  findOne(id) {
    return this.invoices.find(item => item.id == id);
  };

  update() {

  };

  delete() {

  };
};

module.exports = InvoiceService;
