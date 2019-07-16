const Sequelize = require('sequelize');
const sequelize = require('../configs/sequelize');

class User extends Sequelize.Model {}

User.init({
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    nama: Sequelize.STRING,
    jk: Sequelize.STRING,
    alamat: Sequelize.STRING,
    noHp: Sequelize.STRING
}, {
    sequelize,
    modelName: 'user'
});

module.exports = User;