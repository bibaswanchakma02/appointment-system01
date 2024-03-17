const mongoose = require('mongoose');


const teacherSchema = new mongoose.Schema(
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
        
        // subject:{
        //     type:String,
        //     required:true,
        // },

        email:{
            type: String,
            required: true,
            unique:true,
            lowercase:true,
        },
        password:{
            type:String,
            required:true,
            
        }


    }
)

// export const teacher = mongoose.model("teacher", teacherSchema);
const teacher = new mongoose.model( "teacher" , teacherSchema ); 
module.exports=teacher;
