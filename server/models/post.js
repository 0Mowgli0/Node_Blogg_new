module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Post', {
        id: { 
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        title: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        ImageUrl: {
            type: DataTypes.STRING(255),

        }
    }, {underscored: true}
);
};