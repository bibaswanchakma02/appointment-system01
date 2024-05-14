const student = require('../../models/student.model')
const teacher = require('../../models/teacher.model')

const approve_teacher_registration = async(req,res)=>{
    const teacherId = req.params.teacherId

    try {
        const approve = await teacher.findByIdAndUpdate(teacherId,{status: 'approved'}, {new: true})

        if(approve){
            res.status(201).redirect('/admindashboard');
        }else{
            res.status(401).send('not found');
        }
    } catch (error) {
        
    }
}

const approve_student_registration = async(req,res)=>{
    const studentId = req.params.studentId

    try {
        const approve = await student.findByIdAndUpdate(studentId,{status: 'approved'}, {new: true})

        if(approve){
            res.status(201).redirect('/admindashboard');
        }else{
            res.status(401).send('not found');
        }
    } catch (error) {
        
    }
}

module.exports = {
    approve_student_registration,
    approve_teacher_registration
}

