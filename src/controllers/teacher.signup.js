const teacher = require('../models/teacher.model')
// const bcrypt = require('bcryptjs');

const teacherSignup = async(req, res) => {
    const {username , name, email ,subject, password } = req.body;
    try {
        //check for existing user
        const existingUser = await teacher.findOne({ $or: [{ email }, { username }] });
        if(existingUser){
            return res.status(400).send('User already exists');
        }

        //hash the password
        // const hashedPassword = await bcrypt.hash(password, 12);

        //create new user
        const newTeacher = new teacher(
            {
                "username" : username, 
                "name":name,
                "email": email, 
                "subject":subject,
                "password" :password,
            });
            
        await newTeacher.save();
        res.render('teacherlogin');
        // console.log(req.body);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = teacherSignup;
