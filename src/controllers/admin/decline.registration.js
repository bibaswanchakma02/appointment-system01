const student = require('../../models/student.model')
const teacher = require('../../models/teacher.model')

const decline_teacher_registration = async(req,res)=>{
    const teacherId = req.params.teacherId

    try {
        const decline = await teacher.findByIdAndUpdate(teacherId,{status: 'declined'})

        if(decline){
            res.status(201).redirect('/admindashboard');
        }else{
            res.status(401).send('not found');
        }
    } catch (error) {
        console.log(error);
    }
}
const decline_student_registration = async(req,res)=>{
    const studentId = req.pramas.studentId

    try {
        const decline = await student.findByIdAndUpdate(studentId, {status: 'declined'})

        if(decline){
            res.status(201).redirect('/admindashboard')
        }else{
            res.status(401).send('not found');
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    decline_teacher_registration,
    decline_student_registration
}