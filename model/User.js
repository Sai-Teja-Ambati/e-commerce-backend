//import mongoose
const mongoose=require('mongoose')
//Create a schema
const userSchema = new mongoose.Schema({
    u_id:{
        type:Number,
        unique:true,
        required:true
    },
    u_name:String,
    u_pwd:String,
    u_u_email:String,
    u_addr:String,
    u_u_contact:Number,
})
module.exports=mongoose.model("User",userSchema)