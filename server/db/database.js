// The sole purpose of this module is to establish a connection to your
// Postgres database by creating a Sequelize instance (called `db`).
// You shouldn't need to make any other modifications here.
const chalk = require('chalk')
const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const dbName = process.env.NODE_ENV === 'test' ? `${pkg.name}-test`:pkg.name
console.log(chalk.yellow(`Opening database connection to ${dbName}`))


const db = new Sequelize(`postgres://localhost:5432/${dbName}`,{
  logging:false,
  operatorsAliases: false,
})

module.exports = db
