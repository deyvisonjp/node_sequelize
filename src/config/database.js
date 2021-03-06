require('dotenv/config');

const config = {
    username: 'root',
    password: process.env.DB_PASS,
    database: 'express_sequelize',
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: true,
        underscored: true
    },
}

module.exports = config;