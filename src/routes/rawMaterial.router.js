const express = require('express');
const RawMaterialsService = require('../services/rawMaterial.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createRawMaterialSchema, updateRawMaterialSchema, getRawMaterialSchema } = require('../schemas/rawMaterial.schema');

const router = express.Router();
const service = new RawMaterialsService();

router.get('/', async (req, res) => {
  const rawMaterials = await service.find();
  res.json(rawMaterials);
});

router.get('/filter', (req, res) => {
  res.send('RawMaterials with a filter');
});

router.get('/:id',
  validatorHandler(getRawMaterialSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
    const rawMaterial = await service.findOne(id);
    res.json(rawMaterial);
    } catch (error) {
      next(error);
    }
});

router.post('/',
  validatorHandler(createRawMaterialSchema, 'body'),
  async (req, res, next) => {
    try{
      const body = req.body;
      const newRawMaterial = await service.create(body);
      res.status(201).json(newRawMaterial);
    } catch (error) {
      next(error);
    }

  });

router.patch('/:id',
  validatorHandler(getRawMaterialSchema, 'params'),
  validatorHandler(updateRawMaterialSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
    const body = req.body;
    const rawMaterial = await service.update(id, body);
    res.json(rawMaterial);
    } catch (error) {
      next(error);
    };
});

router.delete('/:id',
validatorHandler(getRawMaterialSchema, 'params'),
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
