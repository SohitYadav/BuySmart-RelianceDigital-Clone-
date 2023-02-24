const mongoose=require('mongoose');
// const validator=require('validator');

const userSchema=new mongoose.Schema({
    name:{
        type:String
       
    },
    
    email:{
        type:String,
        unique:true
        
    },
    password:{
        type:String
       
    },
    phone:{
        type:String,
         
    }
})





const userModel=mongoose.model("User",userSchema);

module.exports=userModel;
