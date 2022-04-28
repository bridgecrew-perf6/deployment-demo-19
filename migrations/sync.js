const {sequelize} = require('../models')

sequelize.sync({force:true})
  .then(() => {
    console.log("Database is now in sync")
    sequelize.close()
  })
  .catch((error) => console.log(error))