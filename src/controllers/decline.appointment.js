const appointment = require('../models/appointment.model')

const decline_appointment = async(req,res)=>{
    const appointmentId = req.params.appointmentId;

    try {
        const decline = await appointment.findByIdAndUpdate(appointmentId,{status: 'declined'} );

        if(decline){
            res.status(201).redirect('/teacherdashboard')
        }else{
            res.status(401).send('Appointment not found');
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = decline_appointment;