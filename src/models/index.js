const { User, UserSchema } = require('./user.model');
const { Category, CategorySchema } = require('./category.models');
const { Invoice, InvoiceSchema } = require('./invoice.model');
const { Headquarter, HeadquarterSchema } = require('./headquarter.model');
const { Role, RoleSchema } = require('./role.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Invoice.init(InvoiceSchema, Invoice.config(sequelize));
  Headquarter.init(HeadquarterSchema, Headquarter.config(sequelize));
  Role.init(RoleSchema, Role.config(sequelize));
}

module.exports = setupModels;
