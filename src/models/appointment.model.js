// import mongoose, {Schema} from mongoose;
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
        date:{
            type:Date,
            required:true,
        },
        time:{
            type: String,
            required:true,
        },
        purpose:{
            type: String

        },
        message:{
            type: String
        }
    }
)

// export const appointment = mongoose.model("appointment", appointments);
const appointment = new mongoose.model("appointment", appointments);
module.exports = appointment;
