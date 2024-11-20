'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;

if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(
        config.database,
        config.username,
        config.password,
        {
            host: config.host,   // Ensure the host is correctly passed
            dialect: config.dialect,
            ...config
        }
    );
}

db.Category = require('./category')(sequelize, Sequelize.DataTypes);
db.New = require('./news')(sequelize, Sequelize.DataTypes);

db.Category.hasMany(db.New, { foreignKey: 'category_id', as: 'news', onDelete: 'CASCADE' });
db.New.belongsTo(db.Category, { foreignKey: 'category_id', as: 'category' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
