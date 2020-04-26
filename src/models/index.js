const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';

const dbConfig = require('../config/database');
const connection = new Sequelize(dbConfig);

try {
    connection.authenticate();
    console.log('Connection has been stablished successfully');
  } catch (error) {
    console.error('Unable to connect to database', error);  
}

module.exports = connection;