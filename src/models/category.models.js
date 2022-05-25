const { Model, DataTypes, Sequelize } = require('sequelize');

const CATEGORY_TABLE = 'category';

const CategorySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  burguers: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  strong_plates: {
    allowNull: false,
    type: DataTypes.STRING
  },
  hot_dogs: {
    allowNull: false,
    type: DataTypes.STRING
  },
  french_fries: {
    allowNull: false,
    type: DataTypes.STRING
  },
  limonades: {
    allowNull: false,
    type: DataTypes.STRING
  },
  sodas: {
    allowNull: false,
    type: DataTypes.STRING
  },
  beverages: {
    allowNull: false,
    type: DataTypes.STRING
  },
  berrs: {
    allowNull: false,
    type: DataTypes.STRING
  },
  domi: {
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

class Category extends Model {
  static associate() {

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category',
      timestand: false
    }
  }
}

module.exports = { CATEGORY_TABLE, CategorySchema, Category };
