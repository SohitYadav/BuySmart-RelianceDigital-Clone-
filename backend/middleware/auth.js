const jwt=require("jsonwebtoken");
require("dotenv").config();

const authenticate=(req,res,next)=>{
    const token=req.headers.authorization
if(token){
    const decode=jwt.verify(token,process.env.jwtSecret)
    if(decode){
        const userId=decode.userID;
        req.body.userID=userId; 
        next();
    }else{
        res.send({msg:"please login first"})
    }
}else{
    res.send({msg:"plese login first"})
}
}


// exports.authorizeRoles = (...roles) => {
//     return (req, res, next) => {
//       if (!roles.includes(req.user.role)) {
//         return next(
//           res.json("Not allowed to access")
//         );
//       }
  
//       next();
//     };
//   };


module.exports={authenticate}