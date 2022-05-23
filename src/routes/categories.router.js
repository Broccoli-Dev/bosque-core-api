const express = require('express');
const CategoryService = require('../services/category.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createCategoriesSchema, updateCategoriesSchema, getCategoriesSchema } = require('../schemas/categories.schema');



const router = express.Router();

const service = new CategoryService;

router.get('/', async (req, res) => {
  const categories = await service.find();
  res.json(categories);
});

router.get('/filter', (req, res) => {
  res.send('categories with a filter');
});

router.get('/:id',
  validatorHandler(getCategoriesSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
    const category = await service.findOne(id);
    res.json(category);
    } catch (error) {
      next(error);
    }
});

router.post('/',
  validatorHandler(createCategoriesSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newCategory = await service.create(body);
    res.status(201).json(newCategory);
});

router.patch('/:id',
  validatorHandler(getCategoriesSchema, 'params'),
  validatorHandler(updateCategoriesSchema, 'body'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, body);
      res.json(category);
    } catch (error) {
      res.status(404).json({
        message: error.message
      });
    };

});

router.delete('/:id',
  validatorHandler(getCategoriesSchema, 'params'),
  async (req, res) => {
    try {
      const { id } = req.params;
    const response = await service.delete(id);
    res.json(response);
    } catch (error) {
      res.status(404).json({
        message: error.message
      });
    };

});


module.exports = router;
