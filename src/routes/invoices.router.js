const express = require('express');
const InvoiceService = require('../services/invoice.service');

const router = express.Router();

const service = new InvoiceService();

router.get('/', async (req, res) => {
  const invoices = await service.find();
  res.json(invoices);
});

router.get('/filter', (req, res) => {
  res.send('Invoices with a filter');
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
  const invoice = await service.findOne(id);
  res.json(invoice);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newInvoice = await service.create(body);
  res.status(201).json(newInvoice);
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
  const body = req.body;
  const invoice = await service.update(id, body);
  res.json(invoice);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }

});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
  const response = await service.delete(id);
  res.json(response);
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }

});


module.exports = router;
