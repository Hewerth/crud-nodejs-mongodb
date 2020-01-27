const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    exercise: {
        type: String,
        required: [true, 'El nombre del ejercicio es necesario.']
    },
    description: {
        type: String,
        max: 100
    }
});

module.exports = mongoose.model('Exercise', ExerciseSchema);