const appointment = require('../models/appointment.model')

const approve_appointment = async (req,res) =>{
    const appointmentId = req.params.appointmentId;

    try {
        const approve = await appointment.findByIdAndUpdate(appointmentId,{status: 'approved'}, {new: true})

        if(approve){
            res.status(201).redirect('/teacherdashboard');
        }else{
            res.status(401).send('Appointment not found');
        }

    } catch (error) {
        console.log(error);
    }
}

module.exports = approve_appointment;