// import mongoose, {Schema} from mongoose;
// const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const appointments = new mongoose.Schema(
    {
        teacherID:{
            type:String,
            required: true,
        },
        studentID:{
            type: String,
            required: true,
        },

        studentName:{
            type: String,
            required: true,
        },
        teacherName:{
            type: String,
            required: true,
        },
        date:{
            type:String,
            required:true,
        },
        time:{
            type: String,
            required:true
        },
        message:{
            type: String
        },
        status: {
            type:String,
            default:'pending'
        }
    }
)

// export const appointment = mongoose.model("appointment", appointments);
const appointment = new mongoose.model("appointment", appointments);
module.exports = appointment;
