import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
 
    username:{
        type:String,
        required:[true,"Please Provide Name"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Please Provide Passwords"],

    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    VerifyToken:String,
    VerifyTokenExpiry:Date

})

const User = mongoose.models.users || mongoose.model("UserPrfile",userSchema)

export default User ; 