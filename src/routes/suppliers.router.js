const express = require('express');
const SuppliersService = require('../services/suppliers.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createSupplierSchema, updateSupplierSchema, getSupplierSchema } = require('../schemas/suppliers.schema');

const router = express.Router();
const service = new SuppliersService();

router.get('/', async (req, res) => {
  const supplier = await service.find();
  res.json(supplier);
});

router.get('/filter', (req, res) => {
  res.send('Suppliers with a filter');
});

router.get('/:id',
  validatorHandler(getSupplierSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
    const supplier = await service.findOne(id);
    res.json(supplier);
    } catch (error) {
      next(error);
    }
});

router.post('/',
  validatorHandler(createSupplierSchema, 'body'),
  async (req, res, next) => {
    try{
      const body = req.body;
      const newSuppliers = await service.create(body);
      res.status(201).json(newSuppliers);
    } catch (error) {
      next(error);
    }

  });

router.patch('/:id',
  validatorHandler(getSupplierSchema, 'params'),
  validatorHandler(updateSupplierSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
    const body = req.body;
    const supplier = await service.update(id, body);
    res.json(supplier);
    } catch (error) {
      next(error);
    };
});

router.delete('/:id',
validatorHandler(getSupplierSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
    const response = await service.delete(id);
    res.json(response);
    } catch (error) {
      next(error);
    }

});

module.exports = router;
