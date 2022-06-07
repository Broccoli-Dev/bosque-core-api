const express = require('express');
const ScheduleService = require('../services/schedules.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createScheduleSchema, updateScheduleSchema, getScheduleSchema } = require('../schemas/schedule.schema');

const router = express.Router();
const service = new ScheduleService();

router.get('/', async (req, res) => {
  const schedule = await service.find();
  res.json(schedule);
});

router.get('/filter', (req, res) => {
  res.send('Schedules with a filter');
});

router.get('/:id',
  validatorHandler(getScheduleSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
    const schedules = await service.findOne(id);
    res.json(schedules);
    } catch (error) {
      next(error);
    }
});

router.post('/',
  validatorHandler(createScheduleSchema, 'body'),
  async (req, res, next) => {
    try{
      const body = req.body;
      const newSchedule = await service.create(body);
      res.status(201).json(newSchedule);
    } catch (error) {
      next(error);
    }

  });

router.patch('/:id',
  validatorHandler(getScheduleSchema, 'params'),
  validatorHandler(updateScheduleSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
    const body = req.body;
    const schedule = await service.update(id, body);
    res.json(schedule);
    } catch (error) {
      next(error);
    };
});

router.delete('/:id',
validatorHandler(getScheduleSchema, 'params'),
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
