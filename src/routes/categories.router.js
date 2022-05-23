const express = require('express');
const InvoiceService = require('../services/invoice.service');

const router = express.Router();

const service = new InvoiceService;

router.get('/', (req, res) => {
  const categories = service.find();
  res.json(categories);
});

router.get('/filter', (req, res) => {
  res.send('categories with a filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const category = service.findOne(id);
  res.json(category);
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'Category Created',
    data: body
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Categories patched',
    data: body,
    id: id
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: "Category Deleted",
    id
  });
});


module.exports = router;
