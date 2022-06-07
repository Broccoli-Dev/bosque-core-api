const { Model, DataTypes, Sequelize } = require('sequelize');

const SCHEDULE_TABLE = 'schedules';

const ScheduleSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  time_in: {
    allowNull: false,
    type: DataTypes.DATE
  },
  time_out: {
    allowNull: false,
    type: DataTypes.DATE
  },
   user_id: {
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

class Schedule extends Model {
  static associate() {

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SCHEDULE_TABLE,
      modelName: 'Schedule',
      timestand: false
    }
  }
}

module.exports = { SCHEDULE_TABLE, ScheduleSchema, Schedule };
