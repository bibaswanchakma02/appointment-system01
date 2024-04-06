const student = require('../models/student.model')
const appointment = require('../models/appointment.model')
const bcrypt = require('bcryptjs')


const studentLogin = async(req,res)=>{
    const {username , password} = req.body;

    try {
        //check if user exists in database
        const existingUser = await student.findOne({username});
        if(!existingUser){
            res.status(401).send("Invalid username or password");
            
        }
        
        const passwordMatch = await bcrypt.compare(password, existingUser.password);

        if(existingUser && passwordMatch){
            req.session.user = existingUser ;
            req.session.isAuth = true;
            res.status(200).redirect('/studentdashboard')
            
        }else{
            res.send("Inavalid Username or Password").status(401)
        }
        
    } catch (error) {
        res.status(500).send("Internal server error");
        console.log(error);
    }
}



module.exports = studentLogin;