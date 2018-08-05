const Sequelize = require('sequelize')
const sequelize = new Sequelize('cad-crud', 'root', '', {
    dialect: 'mysql',
    host: '127.0.0.1',
    operatorsAliases: false
})

sequelize.import('objPerson.js')

sequelize.sync().then(()=> console.log('we are synced'))

//sequelize.authenticate().then(()=> console.log('auth on db'))