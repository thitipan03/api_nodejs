'use strict';

module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        tableName: 'category',
        timestamps: false, 
        underscored: true,
    });

    // Category.associate = (models) => {
    //     Category.hasMany(models.New, {
    //         foreignKey: 'category_id',
    //         as: 'news', 
    //     });
    // };

    return Category;
};
