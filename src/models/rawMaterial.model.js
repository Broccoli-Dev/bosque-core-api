const { Model, DataTypes, Sequelize } = require('sequelize');

const RAW_MATERIAL_TABLE = 'raw_material';

const RawMaterialSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  raw_material_name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class RawMaterial extends Model {
  static associate() {

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: RAW_MATERIAL_TABLE,
      modelName: 'RawMaterial',
      timestand: false
    }
  }
}

module.exports = { RAW_MATERIAL_TABLE, RawMaterialSchema, RawMaterial };
