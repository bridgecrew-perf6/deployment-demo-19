const databaseConfig = require('../config/database')
const {DATABASE_URL} = require('../config')
const {Sequelize} = require('sequelize')
const setupProject = require('./Project')
const sequelize = new Sequelize(DATABASE_URL,databaseConfig)

const Project = setupProject(sequelize)

module.exports = {sequelize, Project}