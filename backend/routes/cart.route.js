const express=require('express');
const cartRouter=express.Router();
const {cartModel}=require("../models/cartmodel")




cartRouter.get("/",async (req,res)=>{
    // const userid=req.body.userID
    try{
       const cart=await cartModel.find();
       return res.send({
        status: "success",
        data: cart,
      });
    }catch(error){
        res.status(409).json({ message : error.message })
    }
})

cartRouter.post("/create",async (req,res)=>{
    const body = req.body;
  
    try{
        const newImage = new cartModel(body)
       await newImage.save();
        res.send({msg:'Data added to the cart'})
    }catch(error){
        res.status(409).json({ message : error.message })
    }
}) 

cartRouter.delete("/delete/:id", async (req, res) => {
  const Id = req.params.id;
  
  try {    
      await cartModel.findByIdAndDelete({_id:Id});
      res.send(`Product data deleted with id : ${Id}`);
    
  } catch (err) {
    res.send("cannot delete this item");
    console.log(err);
  }
  });

  cartRouter.patch("/update/:id", async (req, res) => {
    const Id = req.params.id;
    const payload=req.body;
    try {
      
       let cart= await cartModel.findByIdAndDelete({_id:Id},payload);
        return res.send({
          status: "success",
          data: cart,
        });
  
      
    } catch (err) {
      res.send("cannot delete this item");
      console.log(err);
    }
    });

module.exports={cartRouter}