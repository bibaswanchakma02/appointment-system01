const express = require('express')
const router = express.Router();

const studentSignup = require('../controllers/student.signup')
const teacherSignup = require('../controllers/teacher.signup')
const studentLogin = require('../controllers/student.login')
const logout = require('../controllers/logout')
const createAppointment = require('../controllers/appointment.request');
const teacherLogin = require('../controllers/teacher.login');
const approve_appointment = require('../controllers/approve.appointment')
const decline_appointment = require('../controllers/decline.appointment');
const delete_appointment = require('../controllers/delete.appointment');

//signup_controller routes
router.route('/studentsignup').post(studentSignup);
router.route('/teachersignup').post(teacherSignup);
router.route('/studentsignin').post(studentLogin);
router.route('/teachersignin').post(teacherLogin);


//appointment routes
router.route('/appointment-request').post(createAppointment)
router.route('/approve-appointment/:appointmentId').get(approve_appointment);
router.route('/decline-appointment/:appointmentId').get(decline_appointment);
router.route('/delete-appointment/:appointmentId').get(delete_appointment)

//logout route
router.route('/logout').get(logout);

module.exports = router