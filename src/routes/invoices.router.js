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
  res.status(201).json({
    message: 'Invoice Created',
    data: body
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Invoice patched',
    data: body,
    id: id
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: "Invoice Deleted",
    id
  });
});


module.exports = router;
