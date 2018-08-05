const PersonModel = (sequelize, DataTypes)=> {
    const Person = sequelize.define('Person', {
        name: DataTypes.STRING,
        role: DataTypes.STRING
    })
    return Person
}

module.exports = PersonModel