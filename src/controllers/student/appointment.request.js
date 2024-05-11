const appointment = require('../../models/appointment.model')
const student = require('../../models/student.model');
const teacher = require('../../models/teacher.model');
const moment = require('moment');


const createAppointment = async (req,res)=>{
    const {teacherId,studentId,date,time,message} = req.body;

    try {
        const formattedDate = moment(date).format('DD-MM-YYYY');
        const formattedTime = moment(time, 'HH:mm').format('hh:mm A');
        ;
        const existing_Appointment = await appointment.findOne({teacherId, date: formattedDate, time: formattedTime});
        const currStudent = await student.findOne({id: studentId})
        const currTeacher = await teacher.findOne({id: teacherId})
        const studentName = currStudent.name;
        const teacherName = currTeacher.name;


        if(existing_Appointment){
            return res.status(400).send('Appointment already exists'); 
        }

        const new_Appointment = new appointment({
            "teacherID" : teacherId,
            "studentID" : studentId,
            "studentName" : studentName,
            "teacherName" : teacherName,
            "date" : formattedDate,
            "time" : formattedTime,
            "message" : message,

        });
        
        await new_Appointment.save();
        console.log("appointment request sent ");
        res.status(201).json({message: "Request sent successfully"})
        
    } catch (error) {
        res.status(500).send("Internal server error")
        console.log(error);
    }
}

module.exports = createAppointment