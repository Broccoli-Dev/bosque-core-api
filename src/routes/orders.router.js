const express = require('express');
const OrdersService = require('../services/orders.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createOrderSchema, updateOrderSchema, getOrderSchema } = require('../schemas/orders.schema');

const router = express.Router();
const service = new OrdersService();

router.get('/', async (req, res) => {
  const orders = await service.find();
  res.json(orders);
});

router.get('/filter', (req, res) => {
  res.send('Orders with a filter');
});

router.get('/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
    const orders = await service.findOne(id);
    res.json(orders);
    } catch (error) {
      next(error);
    }
});

router.post('/',
  validatorHandler(createOrderSchema, 'body'),
  async (req, res, next) => {
    try{
      const body = req.body;
      const newOrders = await service.create(body);
      res.status(201).json(newOrders);
    } catch (error) {
      next(error);
    }

  });

router.patch('/:id',
  validatorHandler(getOrderSchema, 'params'),
  validatorHandler(updateOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
    const body = req.body;
    const orders = await service.update(id, body);
    res.json(orders);
    } catch (error) {
      next(error);
    };
});

router.delete('/:id',
validatorHandler(getOrderSchema, 'params'),
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