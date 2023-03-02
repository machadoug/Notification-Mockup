const path = require('path')

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'notificationmockup',
    user: process.env.DB_USER || 'notificationmockup',
    password: process.env.DB_PASS || 'notificationmockup',
    options: {
      dialect: process.env.DB_DIALECT || 'sqlite',
      host: process.env.DB_HOST || 'localhost',
      storage: path.resolve(__dirname, '../../notificationmockup.sqlite')
    }
  }
}