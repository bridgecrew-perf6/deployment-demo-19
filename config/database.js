const {NODE_ENV} = require('./')
let databaseConfig;

switch(NODE_ENV){
  case 'development':
    databaseConfig = {
      dialect: 'sqlite',
      storage: ':memory:'
    }; break;
  case 'production':
    databaseConfig = {
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
    }; break;
  default:
    throw new Error('Invalid environment')
}

module.exports = databaseConfig