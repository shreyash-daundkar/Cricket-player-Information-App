const Sequelize = require('sequelize');

const database = require('../util/database');

module.exports = database.define('players', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    birthplace: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    career: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    matches: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    centuries: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    score: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    wickets: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});
