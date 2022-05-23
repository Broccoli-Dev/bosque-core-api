const express = require('express');
const usersRouter = require('./usersRouter');
const invoicesRouter = require('./invoicesRouter');
const categoriesRouter = require('./categoriesRouter');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/invoices', invoicesRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routerApi;
