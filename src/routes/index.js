const usersRouter = require('./usersRouter');
// const invoiceRouter = require('./InvoiceRouter');

function routerApi(app) {
  app.use('/users', usersRouter);
  // app.use('/invoices', invoiceRouter);
}

module.exports = routerApi;
