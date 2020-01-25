const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new Schema({
    username:{
        type:String,
        require: [true, 'El nombre de usuario es necesario.'],
        unique: true
    },
    email:{
        type:String,
        require: [true, 'El email es necesario.'],
        unique: true
    },
    password: {
        type: String,
        require: [true, 'La contraseña es necesaria.']
    },
    status:{
        type: Boolean,
        default: true
    }
},{
    timestamps:true
});

//Ocultar el campo password en las peticiones
UserSchema.methods.toJSON = function(){
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}

//validar valores unicos en la base de datos
UserSchema.plugin(uniqueValidator, {message: '{PATH} debe ser único.'});

module.exports = mongoose.model('User', UserSchema);