const express=require('express');
const {connection}=require("./db");
const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Home Page")
})



app.listen(3200,async (req,res)=>{
    try{
await connection;
console.log("Connected and Listening to 3200");
    }
    catch(err){
        console.log(err);
    }
})