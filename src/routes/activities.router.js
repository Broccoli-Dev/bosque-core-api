const express = require('express');
const ActivitiesService = require('../services/activities.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createActivitySchema, updateActivitySchema, getActivitySchema } = require('../schemas/activities.schema');

const router = express.Router();
const service = new ActivitiesService();

router.get('/', async (req, res) => {
  const activitiess = await service.find();
  res.json(activitiess);
});

router.get('/filter', (req, res) => {
  res.send('Activities with a filter');
});

router.get('/:id',
  validatorHandler(getActivitySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
    const activities = await service.findOne(id);
    res.json(activities);
    } catch (error) {
      next(error);
    }
});

router.post('/',
  validatorHandler(createActivitySchema, 'body'),
  async (req, res, next) => {
    try{
      const body = req.body;
      const newActivities = await service.create(body);
      res.status(201).json(newActivities);
    } catch (error) {
      next(error);
    }

  });

router.patch('/:id',
  validatorHandler(getActivitySchema, 'params'),
  validatorHandler(updateActivitySchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
    const body = req.body;
    const activities = await service.update(id, body);
    res.json(activities);
    } catch (error) {
      next(error);
    };
});

router.delete('/:id',
validatorHandler(getActivitySchema, 'params'),
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
