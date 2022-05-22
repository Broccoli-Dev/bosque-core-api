const usersRouter = require('./usersRouter');
const invoiceRouter = require('./invoiceRouter');

function routerApi(app) {
  app.use('/users', usersRouter);
  app.use('/invoices', invoiceRouter);
}

module.exports = routerApi;
