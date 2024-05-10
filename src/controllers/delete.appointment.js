const appointment = require('../models/appointment.model')

const delete_appointment = async(req,res)=>{
    const appointmentId = req.params.appointmentId

    try {
        const delete_appointment = await appointment.findByIdAndDelete(appointmentId)
        if(delete_appointment){
            res.status(201).redirect('/studentdashboard')
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = delete_appointment;