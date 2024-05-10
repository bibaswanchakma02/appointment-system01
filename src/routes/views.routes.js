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
    const approvedAppointments = await appointment.find({$and: [{ studentID: studentData.id }, { status: 'approved' }] })
    const declinedAppointments = await appointment.find({$and: [{ studentID: studentData.id }, { status: 'declined' }]})
    const pendingAppointments  = await appointment.find({$and: [{ studentID: studentData.id }, { status: 'pending' }]})
    res.render('studentdashboard', {
        student: studentData, 
        teachers : teachers, 
        approvedappointment: approvedAppointments, 
        declinedAppointment : declinedAppointments,
        pendingappointment : pendingAppointments
     });

})

router.get('/teacherdashboard',isAuth, async (req,res)=>{
    const teacherData = req.session.user;
    const pendingappointments = await appointment.find({ $and: [{ teacherID: teacherData.id}, { status: 'pending' }]})
    const approvedAppointments = await appointment.find({ $and: [{ teacherID: teacherData.id}, { status: 'approved' }]})
    res.render('teacherdashboard', {teacher:teacherData, appointments: pendingappointments, approvedappointment: approvedAppointments});
})

router.get('/request-appointment', (req,res)=>{
    res.render('requestAppointment')
})



module.exports = router;