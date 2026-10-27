const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

async function registerUSer(req, res){
    const { username, email, password } = req.body;

    const isUSerAlreadyExists = await userModel.findOne({
        email
    })

    if(isUSerAlreadyExists){
        return res.status(409).json({
            message: "User Already Exists"
        })
    }

    const user = await userModel.create({
        username, email, password
    })

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(201).json({
        message: "User Registered Successfully"
    })
}

module.exports = { registerUSer }