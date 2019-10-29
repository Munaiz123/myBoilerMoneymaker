// The sole purpose of this module is to establish a connection to your
// Postgres database by creating a Sequelize instance (called `db`).
// You shouldn't need to make any other modifications here.

const Sequelize = require('sequelize')

const db = new Sequelize('postgres://localhost:5432/Wolverine',{
  logging:false,
  operatorsAliases: false,
})

module.exports = db
