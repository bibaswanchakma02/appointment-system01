const express = require('express')
const router = express.Router();

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

module.exports = router;