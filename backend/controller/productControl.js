const {productModel}=require('../models/product.model');
const { ApiFeatures } = require('./apifeatures');





// create product -> Admin
exports.createProduct=async(req,res,next)=>{
    const product = await productModel.create(req.body);
    res.json(product)
}

// get all products
exports.getAllProducts=async(req,res)=>{
    const resultPerPage=5;
    const productCount=await productModel.countDocuments();
const apiFeatures= new ApiFeatures(productModel.find(),req.query).search().filter().pagination(resultPerPage)
    const product=await apiFeatures.query;
    res.json(product,productCount);
}

//get product details
exports.getProductDetails=async (req,res,next)=>{
    const product=await productModel.findById(req.params.id);
    if(!product){
        return res.status(500).json("Product not found")
    }

    res.json(product)
    
}

//update product -> Admin

exports.updateProduct=async (req,res)=>{
    let product=productModel.findById(req.params.id);
    if(!product){
        return res.status(500).json("Product not found")
    }else{
product=await productModel.findByIdAndUpdate(req.params.id,req.body);

    res.json(product)
    }
    
}

//delete product

exports.deleteProduct=async (req,res)=>{
    let product= await productModel.findById(req.params.id);
    if(!product){
        return res.status(500).json("Product not found")
    }else{
await product.remove(); 

    res.json("Product Deleted Successfully")
    }
}