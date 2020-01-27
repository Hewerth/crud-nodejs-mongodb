const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoutineSchema = new Schema({
    routine:{
        type:String,
        required:[true, 'El nombre de la rutina es necesario.'],
        max:60
    },
    set:{
        type:Number,
        required:true
    },
    repetitions:{
        type: Number,
        required:true
    },
    exercises: [{type:Schema.Types.ObjectId, ref:'Exercises'}]
},
{
    timestamps:true
})

module.exports = Schema.model('Routine', RoutineSchema);