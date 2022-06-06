const express = require('express');
const RolesService = require('../services/roles.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createRoleSchema, updateRoleSchema, getRoleSchema } = require('../schemas/roles.schema');

const router = express.Router();
const service = new RolesService();

router.get('/', async (req, res) => {
  const roless = await service.find();
  res.json(roless);
});

router.get('/filter', (req, res) => {
  res.send('Roles with a filter');
});

router.get('/:id',
  validatorHandler(getRoleSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
    const roles = await service.findOne(id);
    res.json(roles);
    } catch (error) {
      next(error);
    }
});

router.post('/',
  validatorHandler(createRoleSchema, 'body'),
  async (req, res, next) => {
    try{
      const body = req.body;
      const newRoles = await service.create(body);
      res.status(201).json(newRoles);
    } catch (error) {
      next(error);
    }

  });

router.patch('/:id',
  validatorHandler(getRoleSchema, 'params'),
  validatorHandler(updateRoleSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
    const body = req.body;
    const roles = await service.update(id, body);
    res.json(roles);
    } catch (error) {
      next(error);
    };
});

router.delete('/:id',
validatorHandler(getRoleSchema, 'params'),
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
