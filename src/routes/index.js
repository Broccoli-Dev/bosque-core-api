const usersRouter = require('./usersRouter');
const invoicesRouter = require('./invoicesRouter');
const categoriesRouter = require('./categoriesRouter');

function routerApi(app) {
  app.use('/users', usersRouter);
  app.use('/invoices', invoicesRouter);
  app.use('/categories', categoriesRouter);
}

module.exports = routerApi;
