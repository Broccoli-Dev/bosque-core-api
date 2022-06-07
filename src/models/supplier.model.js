const { Model, DataTypes, Sequelize } = require('sequelize');

const SUPPLIER_TABLE = 'suppliers';

const SupplierSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  supplier_name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  tel: {
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Supplier extends Model {
  static associate() {

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SUPPLIER_TABLE,
      modelName: 'Supplier',
      timestand: false
    }
  }
}

module.exports = { SUPPLIER_TABLE, SupplierSchema, Supplier };
