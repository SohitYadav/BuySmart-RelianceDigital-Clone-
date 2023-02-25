const express=require('express');
const {connection}=require("./db");
const {authenticate}=require('./middleware/auth');
const { cartRouter } = require('./routes/cart.route');
const {productRouter}=require('./routes/product.route')
const {userRouter}=require('./routes/user.route')
const cors=require('cors')
// const {}
require('dotenv').config()
//Route imports

const app=express();
app.use(cors());
app.use(express.json());
 
app.use("/users",userRouter);
app.use("/products",productRouter);
// app.use(authenticate)
app.use("/cart",cartRouter)


app.listen(3200,async (req,res)=>{
    try{
await connection;
console.log("Connected and Listening to 3200");
    }
    catch(err){
        console.log(err);
    }
})