const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
    let users = await User.find({status: true});

    try {
        res.status(200).json({
            ok: true,
            usuarios: users
        })
    } catch (err) {
        res.status(400).json({
            ok: false,
            err: err
        });
    }
});


router.post('/', async (req, res) => {
    let body = req.body;

    let newUser = new User({
        username: body.username,
        email: body.email,
        password: body.password
    });

    try {
        await newUser.save();
        return res.status(200).json({
            ok: true,
            usuario: newUser
        });
    }
    catch (err) {
        return res.status(400).json({
            ok: false,
            error: err
        });
    }

});

router.get('/:id', async(req, res) => {

    try{
        let user = await User.findById(req.params.id);
        return res.status(200).json({
            ok:true,
            usuario:user
        });

    }catch(err){
        return res.status(400).json({
            ok:false,
            error: err
        });
    }

});

router.put('/:id', async (req,res)=>{
    try{
        let userUpdated = await User.updateOne({_id:req.params.id}, {$set: {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }});
        return res.status(200).json({
             ok:true,
             usuario: userUpdated
         })
    }catch(err){
        return res.status(400).json({
            ok:false,
            error: err
        });
    }
});

router.delete('/:id', async (req,res)=>{
    try{
        let removeUser = await User.findOneAndUpdate({_id: req.params.id}, {$set:{
            status:false
        }});

        return res.status(200).json({
            ok:true,
            usuario: removeUser
        });

    }catch(err){
        res.status(400).json({
            ok:false,
            error: err
        })
    }
});

module.exports = router;