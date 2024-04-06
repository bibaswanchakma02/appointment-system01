const appointment = require('../models/appointment.model')

const createAppointment = async (req,res)=>{
    const {teacherId,studentId,date,time,message} = req.body;

    try {
        const timeObj = new Date('1970-01-01T' + time)

        const existing_Appointment = await appointment.findOne({teacherId, date, time: timeObj});
        if(existing_Appointment){
            return res.status(400).send('Appointment already exists');
        }

        const new_Appointment = new appointment({
            "teacherID" : teacherId,
            "studentID" : studentId,
            "date" : date,
            "time" : timeObj,
            "message" : message,

        });
        
        await new_Appointment.save();
        console.log("appointment request sent ");
        res.redirect('/studentsignin/dashboard')
        
    } catch (error) {
        res.status(500).send("Internal server error")
        console.log(error);
    }
}

module.exports = createAppointment