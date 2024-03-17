const mongoose = require('mongoose');
// import mongoose, {Schema} from mongoose;


const studentSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,

        },

        // name:{
        //     type: String,
        //     required: true,
        //     unique: true,
        //     lowercase: true,
        // },

        email:{
            type: String,
            required: true,
            lowercase:true,
        },
        password:{
            type:String,
            required:true,
            
        }


    }
)

// export const student = mongoose.model("student", studentSchema)
const student = new mongoose.model("student", studentSchema);
module.exports=student;  //export the model so it can be used in other files