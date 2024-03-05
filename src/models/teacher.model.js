import mongoose, {Schema} from mongoose;


const teacherSchema = new Schema(
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
        
        subject:{
            type:String,
            required:true,
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

export const teacher = mongoose.model("teacher", teacherSchema);