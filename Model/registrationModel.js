module.exports=(sequelize, DataTypes) =>{
    const registration = sequelize.define('registrations', {

        usernamename:{
            type: DataTypes.STRING,
            allowNull: false,
        },  
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },        
    });
    return registration;
}