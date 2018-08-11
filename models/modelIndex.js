const Sequelize = require('sequelize')
const sequelize = new Sequelize('cad-crud', 'root', '', {
    dialect: 'mysql',
    host: '127.0.0.1',
    operatorsAliases: false
})

const pessoa = sequelize.import('./objPerson.js')

module.exports = {
    sequelize,
    models: {
        pessoa
    }
}

//sequelize.authenticate().then(()=> console.log('auth on db'))