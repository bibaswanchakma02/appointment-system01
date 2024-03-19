const express = require('express')
const router = express.Router();
const studentSignup = require('../controllers/student.signup')
const teacherSignup = require('../controllers/teacher.signup')

router.get('/', function(req, res,next){
    res.render('index');
})

router.get('/studentlogin', function(req, res){
    res.render('studentlogin');
} )

router.get('/studentsignup', function(req, res){
    res.render('studentsignup');
} )

router.get('/teacherlogin', function(req, res){
    res.render('teacherlogin');
} )

router.get('/teachersignup', function(req, res){
    res.render('teachersignup');
} )

router.get('/studentdashboard', function(req,res){
    res.render('/studentdashboard');
})

//controller routes
router.route('/studentsignup').post(studentSignup);
router.route('/teachersignup').post(teacherSignup);


module.exports = router;