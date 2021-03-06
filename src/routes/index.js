const express = require('express');
const usersRouter = require('./users.router');
const invoicesRouter = require('./invoices.router');
const categoriesRouter = require('./categories.router');
const headquartersRouter = require('./headquarters.router')
const rolesRouter = require('./roles.router')
const activitiesRouter = require('./activities.router')
const schedulesRouter = require('./schedules.router')

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/invoices', invoicesRouter);
  router.use('/categories', categoriesRouter);
  router.use('/headquarters', headquartersRouter);
  router.use('/roles', rolesRouter);
  router.use('/activities', activitiesRouter);
  router.use('/schedules', schedulesRouter);
}

module.exports = routerApi;
