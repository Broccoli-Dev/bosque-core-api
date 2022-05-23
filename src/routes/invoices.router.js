const express = require('express');
const InvoiceService = require('../services/invoice.service');

const router = express.Router();

const service = new InvoiceService();

router.get('/', (req, res) => {
  const invoices = service.find();
  res.json(invoices);
});

router.get('/filter', (req, res) => {
  res.send('Invoices with a filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const invoice = service.findOne(id);
  res.json(invoice);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newInvoice = service.create(body);
  res.status(201).json(newInvoice);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const invoice = service.update(id, body);
  res.json(invoice);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const response = service.delete(id);
  res.json(response);
});


module.exports = router;
