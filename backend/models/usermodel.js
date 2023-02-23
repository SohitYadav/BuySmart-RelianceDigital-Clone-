const mongoose=require('mongoose');
const validator=require('validator');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:[validator.isEmail,"Please Enter a valid email"]
    },
    password:{
        type:String,
        required:true,
        minLength:[6,"Minimum length should be 6"],
        select:false
    }
})


const userModel=mongoose.model("User",userSchema);

module.exports={
    userModel
}