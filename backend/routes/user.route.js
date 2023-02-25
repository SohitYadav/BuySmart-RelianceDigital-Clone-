const express=require('express');
const userRouter=express.Router();
const userModel=require('../models/usermodel');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
require('dotenv').config();



userRouter.get("/alluser",async (req,res)=>{
    try{
          const data=await userModel.find();
          res.send(data);
    }
    catch(err){
        res.send(err.message);
    }
})


userRouter.post("/register",async (req,res)=>{
    const {name,email,password,phone}=req.body;
    try{
        bcrypt.hash(password,8,async (err,hash)=>{
            if(err){
                res.send(err.message);
            }else{
                const user=new userModel({name,email,password: hash,phone});
                await user.save();
                res.send(user);
            }
        })
    }
    catch(err){
        res.send(err.message);
    }
})


userRouter.post("/login",async (req,res)=>{
    const  {email,password}=req.body;
    try{
        const user=await userModel.find({email});
        if(user.length>0){
            bcrypt.compare(password,user[0].password,(err,decoded)=>{
                if(err){
                    res.send("Credentials Wrong");
                }else{
                    let token=jwt.sign({userID:user[0]._id},process.env.jwtSecret);
                    res.send({"msg":"Signing in","token":token});
                }
            })
        }else{
            res.send("Unable to login: Wrong Credentials");
        }
    }
    catch(err){
        res.send(err.message);
    }
})


module.exports={userRouter}