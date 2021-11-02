const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    original: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    minHeight: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "No Data to show",
    },
    maxHeight: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "No Data to show",
    },
    minWeight: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "No Data to show",
    },
    maxWeight: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "No Data to show",
    },
    life:{ 
      type: DataTypes.STRING,
      defaultValue: "No Data to show"
    },
    photo: {
      type: DataTypes.STRING,
      defaultValue: "No Data to show"
    },
    origin: {
      type: DataTypes.STRING,
      defaultValue: "No Data to show"
    }
  });
};
