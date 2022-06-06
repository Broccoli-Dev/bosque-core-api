const express = require('express');
const usersRouter = require('./users.router');
const invoicesRouter = require('./invoices.router');
const categoriesRouter = require('./categories.router');
const headquartersRouter = require('./headquarters.router')

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/invoices', invoicesRouter);
  router.use('/categories', categoriesRouter);
  router.use('/headquarters', headquartersRouter);
}

module.exports = routerApi;
