const express = require('express');
const IngredientsService = require('../services/ingredients.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createIngredientSchema, updateIngredientSchema, getIngredientSchema } = require('../schemas/ingredients.schema');

const router = express.Router();
const service = new IngredientsService();

router.get('/', async (req, res) => {
  const ingredients = await service.find();
  res.json(ingredients);
});

router.get('/filter', (req, res) => {
  res.send('Ingredients with a filter');
});

router.get('/:id',
  validatorHandler(getIngredientSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
    const ingredient = await service.findOne(id);
    res.json(ingredient);
    } catch (error) {
      next(error);
    }
});

router.post('/',
  validatorHandler(createIngredientSchema, 'body'),
  async (req, res, next) => {
    try{
      const body = req.body;
      const newIngredient = await service.create(body);
      res.status(201).json(newIngredient);
    } catch (error) {
      next(error);
    }

  });

router.patch('/:id',
  validatorHandler(getIngredientSchema, 'params'),
  validatorHandler(updateIngredientSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
    const body = req.body;
    const ingredient = await service.update(id, body);
    res.json(ingredient);
    } catch (error) {
      next(error);
    };
});

router.delete('/:id',
validatorHandler(getIngredientSchema, 'params'),
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
