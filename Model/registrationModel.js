module.exports=(sequelize, DataTypes) =>{
    const user = sequelize.define('users', {

        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },  
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },        
    });
    user.prototype.isValidPassword = async function (password) {
        try {
            return  await bcrypt.compare(password, this.password);
        } catch (error) {
            throw  error;
        }
      };
    return user;
}