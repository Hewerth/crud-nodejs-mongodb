const express = require('express');
const router = express.Router();
const Exercise = require('../models/Exercise');

router.get('/', async (req, res) => {
    try {
        let exercices = await Exercise.find();

        return res.status(200).json({
            ok: true,
            ejercicios: exercices
        });

    } catch (err) {
        return res.status(400).json({
            ok: false,
            error: err
        })
    }
});

router.post('/', async (req, res) => {
    try {
        let body = req.body;
        const exercise = new Exercise({
            exercise: body.exercise,
            description: body.description
        });

        await exercise.save();

        return res.status(200).json({
            ok: true,
            ejercicio: exercise
        });

    } catch (err) {
        return res.status(400).json({
            ok: false,
            error: err
        });
    }
})

router.put('/:id', async (req, res) => {
    try {
        let exercise = await Exercise.updateOne({ _id: req.params.id }, {
            $set: {
                exercise: req.body.exercise,
                description: req.body.description
            }

        });
        return res.status(200).json({
            ok: true,
            ejercicio: exercise
        })
    } catch (err) {
        return res.status(400).json({
            ok: false,
            error: err
        })
    };
});

module.exports = router;