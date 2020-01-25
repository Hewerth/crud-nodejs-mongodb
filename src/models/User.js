const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

module.exports = mongoose.model('User', UserSchema);