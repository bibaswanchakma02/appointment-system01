const student = require('../models/student.model')
// const bcrypt = require('bcryptjs')

const studentLogin = async(req,res)=>{
    const {email , password} = req.body;

    try {
        //check if user exists in database
        const existingUser = await student.findOne({email});
        if(!existingUser){
            res.status(401).send("Invalid username or password");
        }
        // const hashedPass = await student.findOne({password});
        // const passwordMatch = await bcrypt.compare(password, hashedPass);
        const isMatch = await student.findOne({password})
        
        if(existingUser && isMatch){
            res.status(200).send("successful login")
        }else{
            res.send("invalid  username or password").status(401)
        }
        
    } catch (error) {
        res.status(500).send("Internal server error");
        console.log(error);
    }
}

module.exports = studentLogin;