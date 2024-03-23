const express = require('express')
const router = express.Router();
const studentModel = require('../models/student.model')
const teacherModel = require('../models/teacher.model')

//views routes
router.get('/', (req, res,next)=>{
    res.render('index');
})

router.get('/studentlogin', (req, res)=>{
    res.render('studentlogin');
} )

router.get('/studentsignup', (req, res)=>{
    res.render('studentsignup');
} )

router.get('/teacherlogin', (req, res)=>{
    res.render('teacherlogin');
} )

router.get('/teachersignup', (req, res)=>{
    res.render('teachersignup');
} )

router.get('/studentdashboard', (req,res)=>{
    res.render('studentdashboard');
})

router.get('/teacherdashboard', (req,res)=>{
    res.render('teacherdashboard');
})

router.get('/studentdata', async (req, res) => {
    try {
      const students = await studentModel.find(); // Fetch all students
      res.render('studentdashboard', { students }); // Render studentdashboard.ejs with students data
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});
module.exports = router;