const { Model, DataTypes, Sequelize } = require('sequelize');

const INGREDIENT_TABLE = 'ingredients';

const IngredientSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  ingredient_name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Ingredient extends Model {
  static associate() {

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: INGREDIENT_TABLE,
      modelName: 'Ingredient',
      timestand: false
    }
  }
}

module.exports = { INGREDIENT_TABLE, IngredientSchema, Ingredient };
