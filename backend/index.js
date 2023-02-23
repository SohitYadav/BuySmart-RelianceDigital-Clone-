const express=require('express');
const {connection}=require("./db");
require('dotenv').config()
//Route imports
const {router}=require('./routes/product.route')
const app=express();

app.use(express.json());

app.use("/api/v1",router);



app.listen(3200,async (req,res)=>{
    try{
await connection;
console.log("Connected and Listening to 3200");
    }
    catch(err){
        console.log(err);
    }
})