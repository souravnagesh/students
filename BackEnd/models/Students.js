module.exports = (sequelize , DataTypes) => {
    const Students = sequelize.define("Students" , {
        firstName: {
            type: DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull:true
        },
        mobile: {
            type: DataTypes.STRING,
            allowNull:true
        },
        email: {
            type: DataTypes.STRING,
            allowNull:true
        }
    })

    return Students; 
};