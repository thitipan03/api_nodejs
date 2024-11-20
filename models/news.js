'use strict';

module.exports = (sequelize, DataTypes) => {
    const New = sequelize.define('New', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        post_by: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        count_view: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        img: {
            type: DataTypes.STRING, 
            allowNull: true,
        },
        category_id: {
            type: DataTypes.UUID,
            references: {
                model: 'category', 
                key: 'id',
            },
            allowNull: true,
        },
    }, {
        tableName: 'new',
        timestamps: true, 
        underscored: true, 
    });

    // New.associate = (models) => {
    //     New.belongsTo(models.Category, {
    //         foreignKey: 'category_id',
    //         as: 'category', 
    //     });
    // };

    return New;
};
