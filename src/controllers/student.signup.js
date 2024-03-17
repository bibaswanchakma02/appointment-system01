const mongoose = require('mongoose')
const student = require('../models/student.model')
const bodyParser = require('body-parser');

const studentSignup = async(req, res) => {
    const {username ,email , password } = req.body;
    try {
        //check for existing user
        const existingUser = await student.findOne({ $or: [{ email }, { username }] });
        if(existingUser){
            return res.status(400).send('User already exists');
        }

        //create new user
        const newStudent = new student(
            {
                "username" : username, 
                "email": email, 
                "password" :password
            });
            
        await newStudent.save();
        res.render('studentlogin');
        console.log(req.body)
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = studentSignup;
