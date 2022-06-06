const { Model, DataTypes, Sequelize } = require('sequelize');

const ACTIVITY_TABLE = 'activities';

const ActivitySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  duration: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Activity extends Model {
  static associate() {

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ACTIVITY_TABLE,
      modelName: 'Activity',
      timestand: false
    }
  }
}

module.exports = { ACTIVITY_TABLE, ActivitySchema, Activity };
