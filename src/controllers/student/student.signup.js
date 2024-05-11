const student = require('../../models/student.model')
const bcrypt = require('bcryptjs');

const studentSignup = async(req, res) => {
    const {username ,name, studentId, email , password } = req.body;
    try {
        //check for existing user
        const existingUser = await student.findOne({ $or: [{ email }, { username }] });
        if(existingUser){
            return res.status(400).send('User already exists');
        }

        //hash the password
        const hashedPassword = await bcrypt.hash(password, 12);

        //create new user
        const newStudent = new student(
            {
                "username" : username,
                "name" : name,
                "id" : studentId,
                "email": email, 
                "password" :hashedPassword
            });
            
        await newStudent.save();
        res.status(201).json({ message: 'Registration successful!' });
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = studentSignup;
