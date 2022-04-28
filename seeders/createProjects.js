const {Project, sequelize} = require('../models')
const {NODE_ENV} = require('../config')

if(NODE_ENV == 'development'){
  sequelize.sync().then(createProjects)
}else{
  createProjects()
}

async function createProjects(){
  try{
    await Project.bulkCreate([
      {title: 'ColdnYummy', description: 'Lorem ipsum'},
      {title: 'Starwars', description: 'Lorem ipsum'},
      {title: 'Hotnyummy', description: 'Lorem ipsum'},
    ])
    console.log("Added some stuff")
    sequelize.close()
  }catch(error){
    console.log(error)
  }

}