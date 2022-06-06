const express = require('express');
const HeadquartersService = require('../services/headquarters.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createHeadquarterSchema, updateHeadquarterSchema, getHeadquarterSchema } = require('../schemas/headquarters.schema');

const router = express.Router();
const service = new HeadquartersService();

router.get('/', async (req, res) => {
  const headquarterss = await service.find();
  res.json(headquarterss);
});

router.get('/filter', (req, res) => {
  res.send('Headquarterss with a filter');
});

router.get('/:id',
  validatorHandler(getHeadquarterSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
    const headquarters = await service.findOne(id);
    res.json(headquarters);
    } catch (error) {
      next(error);
    }
});

router.post('/',
  validatorHandler(createHeadquarterSchema, 'body'),
  async (req, res, next) => {
    try{
      const body = req.body;
      const newHeadquarters = await service.create(body);
      res.status(201).json(newHeadquarters);
    } catch (error) {
      next(error);
    }

  });

router.patch('/:id',
  validatorHandler(getHeadquarterSchema, 'params'),
  validatorHandler(updateHeadquarterSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
    const body = req.body;
    const headquarters = await service.update(id, body);
    res.json(headquarters);
    } catch (error) {
      next(error);
    };
});

router.delete('/:id',
validatorHandler(getHeadquarterSchema, 'params'),
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
