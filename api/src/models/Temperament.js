module.exports = (sequelize) => {
    //definimos el modelo
    sequelize.define('temperamente', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
          },
        name: {
            type: DataTypes.STRING
        }
    })
}