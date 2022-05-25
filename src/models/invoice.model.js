const { Model, DataTypes, Sequelize } = require('sequelize');

const INVOICE_TABLE = 'invoices';

const InvoiceSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  invoice_number: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  date: {
    allowNull: false,
    type: DataTypes.DATE
  },
  table: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  client: {
    allowNull: false,
    type: DataTypes.STRING
  },
  sub_total: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  discount: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  total: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  payment: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Invoice extends Model {
  static associate() {

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: INVOICE_TABLE,
      modelName: 'Invoice',
      timestand: false
    }
  }
}

module.exports = { INVOICE_TABLE, InvoiceSchema, Invoice };
