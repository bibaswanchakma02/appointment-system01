const express = require('express')
const router = express.Router();

const studentSignup = require('../controllers/student/student.signup')
const teacherSignup = require('../controllers/teacher/teacher.signup')
const studentLogin = require('../controllers/student/student.login')
const logout = require('../controllers/logout')
const createAppointment = require('../controllers/student/appointment.request');
const teacherLogin = require('../controllers/teacher/teacher.login');
const approve_appointment = require('../controllers/teacher/approve.appointment')
const decline_appointment = require('../controllers/teacher/decline.appointment');
const delete_appointment = require('../controllers/student/delete.appointment');
const admin_login = require('../controllers/admin/admin.login');
const {approve_teacher_registration, approve_student_registration} = require('../controllers/admin/approve.registration')

//admin routes
router.route('/adminsignin').post(admin_login)
router.route('/approve-registration/:studentId').get(approve_student_registration)
router.route('/approve-registration/:teacherId').get(approve_teacher_registration)

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