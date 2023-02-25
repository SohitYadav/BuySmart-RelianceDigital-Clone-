const {productModel} = require("../models/product.model");

async function getProductsById(req, res) {
  // const { pId } = req.params;

  const product = await productModel.find();

  return res.send(product)
}

// async function getProductsPaginated(req, res) {
//   try {
//     let {
//       search = "",
//       cat = "",
//       pageSize = 10,
//       page = 1,
//       sortBy = "createdAt",
//       sortOrder = "desc",
//     } = req.query;

//     const totalProducts = await productModel
//       .find({
//         name: {
//           $regex: search,
//         },
//       })
//       .count();
//     // console.log(cat, search);
//     // cat = cat.toLowerCase();
//     const products = await productModel
//       .find({
//         name: {
//           $regex: search,
//         },
//       })
//       .sort({
//         [sortBy]: sortOrder === "asc" ? 1 : -1,
//       })
//       .limit(pageSize)
//       .skip(pageSize * (page - 1));

//     return res.send({
//       status: "success",
//       data: {
//         totalProducts,
//         products,
//         page,
//         pageSize,
//       },
//     });
//   } catch (err) {
//     return res.status(500).send({
//       status: "error",
//       message: "Something went wrong",
//     });
//   }
// }

// async function getProductsByCategory(req, res) {
//   try {
//     let { cat = "", sortBy = "rating", sortOrder = "desc" } = req.query;

//     let arr = cat.split(",");
//     allTotal = [];
//     if (arr.length == 1) {
//       const products = await productModel.find();
//       return res.send({
//         status: "success",
//         data: {
//           products,
//         },
//       });
//     }
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] !== "") {
//         const products = await productModel
//           .find({
//             catg: {
//               $regex: arr[i],
//             },
//           })
//           .sort({
//             [sortBy]: sortOrder === "asc" ? 1 : -1,
//           });
//         allTotal = [...allTotal, ...products];
//       }
//     }
//     // console.log(allTotal.length);
//     return res.send({
//       status: "success",
//       data: {
//         products: allTotal,
//       },
//     });
//   } catch (err) {
//     return res.status(500).send({
//       status: "error",
//       message: "Something went wrong",
//     });
//   }
// }
// async function getProductsByCategory(req, res){
//   try{
//     const page=parseInt(req.query.page);
//     const limit=parseInt(req.query.limit)||5;
//     const search=req.query.search;
//     let sort=req.query.sort || "price"
//     req.query.sort? (sort=req.query.sort.split(",")) : (sort=[sort])
//     let sortBy={}
//     if(sort[1]){
//       sortBy[sort[0]]=sort[1]
//     }else{
//       sortBy[sort[0]]="asc"
//     }

//     const prod=await productModel.find({name:{$regex:search,$options:"i"}})
//     .sort(sortBy)
//     .skip(page*limit)
//     .limit(limit)

//     const total=await productModel.countDocuments({
//       name:{$regex:search,$options:"i"}
//     })
//     const respone={
//       total,page:page+1,limit,prod
//     }
//     res.status(200).json(response)
//   }
//   catch(err){
//     res.send(err);
//   }
// }



//low to high
async function sortinasc(req,res){
  try{
const prod=await productModel.find().sort({price:1});
res.send(prod);
  }
  catch(err){
    res.send(err)
  }
}

//high to low
async function sortindesc(req,res){
  try{
    const prod=await productModel.find().sort({price:-1});
    res.send(prod)
  }
  catch(err){
    res.send(err);
  }
}

//filter by category

// async function filtbycat(req,res){
//   const query=res.query;
//   try{
//     const prod=await productModel.find(query);
//     res.send(prod);
//   }
//   catch(err){
//     req.send(err);
//   }
// }

//laptop

async function filtbylap(req,res){
  try{
    const prod=await productModel.find({category:"Laptop"});
    res.send(prod)
  }
  catch(err){
    res.send(err);
  }
}

//telvision

async function filtbytv(req,res){
  try{
    const prod=await productModel.find({category:"Television"});
    res.send(prod)
  }
  catch(err){
    res.send(err);
  }
}

//tablet

async function filtbytab(req,res){
  try{
    const prod=await productModel.find({category:"Tablet"});
    res.send(prod)
  }
  catch(err){
    res.send(err);
  }
}


async function createProduct(req, res) {
  const product = req.body;
  const data = await productModel.create(product);
  return res.send(data);
}

async function getProductById(req, res) {
  const { id } = req.params;

  const blog = await productModel.findById(id);

  return res.send({
    status: "success",
    data: blog,
  });
}

module.exports = {
  getProductById,
  createProduct,
  sortinasc,
  getProductsById,
  sortindesc,
  filtbylap,
  filtbytab,
  filtbytv
};