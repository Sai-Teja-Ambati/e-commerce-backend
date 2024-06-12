//import mongoose
const mongoose=require('mongoose')
//Create a schema

const cartSchema=new mongoose.Schema({
    p_id:Number,
    p_img:String,
    p_cost:Number,
    p_quan:Number,
    u_id:Number
})
module.exports=mongoose.model("Cart",cartSchema)