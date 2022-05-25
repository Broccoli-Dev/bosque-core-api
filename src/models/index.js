const { User, UserSchema } = require('./user.model');
const { Category, CategorySchema } = require('./category.models');
const { Invoice, InvoiceSchema } = require('./invoice.model');

function setupModels(sequlize) {
  User.init(UserSchema, User.config(sequlize));
  Category.init(CategorySchema, Category.config(sequlize));
  Invoice.init(InvoiceSchema, Invoice.config(sequlize));
}

module.exports = setupModels;
