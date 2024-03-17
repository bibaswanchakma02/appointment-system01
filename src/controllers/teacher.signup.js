const mongoose = require('mongoose')
const teacher = require('../models/teacher.model')
const bodyParser = require('body-parser');

const teacherSignup = async(req, res) => {
    const {username ,email , password } = req.body;
    try {
        //check for existing user
        const existingUser = await teacher.findOne({ $or: [{ email }, { username }] });
        if(existingUser){
            return res.status(400).send('User already exists');
        }

        //create new user
        const newTeacher = new teacher(
            {
                "username" : username, 
                "email": email, 
                "password" :password
            });
            
        await newTeacher.save();
        res.render('teacherlogin');
        console.log(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = teacherSignup;
