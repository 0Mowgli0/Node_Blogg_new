module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Post', {
        id: { 
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    });
};