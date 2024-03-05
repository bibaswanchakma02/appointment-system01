import mongoose, {Schema} from mongoose;


const studentSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,

        },

        name:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },

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

export const student = mongoose.model("student", studentSchema)