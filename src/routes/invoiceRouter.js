const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const invoices = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    invoices.push({
      id: faker.name.firstName(),
      invoice_number: parseInt(faker.commerce.price(), 10),
      date: faker.date.past(),
      time: faker.time.recent(),
      chair: Math.random(),
      client: faker.name.firstName(),
      order_id: faker.name.firstName(),
      sub_total: parseInt(faker.commerce.price(), 10),
      discount: parseInt(faker.commerce.price(), 10),
      total: parseInt(faker.commerce.price(), 10),
      payment: faker.lorem.word()
    });
  }
  res.json(invoices);
});

router.get('/filter', (req, res) => {
  res.send('Invoices with a filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id: "idExample",
    invoice_number: "123546",
    date: "10-06-2015",
    time: "02:02:00",
    chair: 1,
    client: "ClientExample",
    order_id: "OrderId example",
    sub_total: 123456,
    discount: 321,
    total: 123456,
    payment: "paymentExapmle"
  });
});

module.exports = router;
