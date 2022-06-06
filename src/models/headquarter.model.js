const { Model, DataTypes, Sequelize } = require('sequelize');

const HEADQUARTER_TABLE = 'headquarter';

const HeadquarterSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nit: {
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  address: {
    allowNull: false,
    type: DataTypes.STRING
  },
  regime: {
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

class Headquarter extends Model {
  static associate() {

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: HEADQUARTER_TABLE,
      modelName: 'Headquarter',
      timestand: false
    }
  }
}

module.exports = { HEADQUARTER_TABLE, HeadquarterSchema, Headquarter };
