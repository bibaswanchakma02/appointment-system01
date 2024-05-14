 const {ADMIN_USERNAME, ADMIN_PASSWORD} = require('../../constants')
//  const ADMIN_PASSWORD = require('../../constants');

 const admin_login = (req,res)=>{
    const{username,password} = req.body;

    try {
        if(username == ADMIN_USERNAME && password == ADMIN_PASSWORD){
            req.session.username = username;
            req.session.isAuth = true
            res.status(201).json({
                message: 'login successful'
            })
        }
        else{
            res.status(401).json({
                message:'Invalid credentials'
            })
        }
    } catch (error) {
        console.log(error);
    }
 }

 module.exports= admin_login

