const express = require('express')
const router = express.Router();

const studentSignup = require('../controllers/student.signup')
const teacherSignup = require('../controllers/teacher.signup')
const studentLogin = require('../controllers/student.login')

//signup_controller routes
router.route('/studentsignup').post(studentSignup);
router.route('/teachersignup').post(teacherSignup);
router.route('/studentsignin').post(studentLogin);

module.exports = router