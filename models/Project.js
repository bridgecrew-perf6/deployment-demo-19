const {Model, DataTypes} = require('sequelize')


class Project extends Model{}

const setupProject = sequelize => {
  Project.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    tableName: 'projects',
    sequelize
  })
  return Project
}


module.exports = setupProject