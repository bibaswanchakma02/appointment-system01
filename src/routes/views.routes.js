const express = require('express')
const router = express.Router();
const teacherModel = require('../models/teacher.model')
const appointment = require('../models/appointment.model')
const isAuth = require('../controllers/user.authentication')
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

router.get('/studentdashboard',isAuth, async (req,res)=>{
    const studentData = req.session.user;
    const teachers = await teacherModel.find();
    const approvedAppointments = await appointment.find({status: 'approved'})
    res.render('studentdashboard', {student: studentData, teachers : teachers, approvedappointment: approvedAppointments});

})

router.get('/teacherdashboard',isAuth, async (req,res)=>{
    const pendingappointments = await appointment.find({status : 'pending'})
    const approvedAppointments = await appointment.find({status: 'approved'})
    const teacherData = req.session.user;
    res.render('teacherdashboard', {teacher:teacherData, appointments: pendingappointments, approvedappointment: approvedAppointments});
})

router.get('/request-appointment', (req,res)=>{
    res.render('requestAppointment')
})

// router.get('/studentsignin', async (req, res) => {
//     try {
//       const students = await studentModel.find(); // Fetch all students
//       res.render('studentdashboard', { students }); // Render studentdashboard.ejs with students data
//     } catch (error) {
//         res.status(500).send('Error fetching data');
//     }
// });


module.exports = router;