const express = require("express");
const router = express.Router();
const UserModel = require("../../schemas/users/userSchema");
router.post("/new-user/login", (req, res, next) => {
  UserModel.findOne({
    username:req.body.userName,
    password:req.body.passWord,
  }).then((findres)=>{
    if(findres){
        res.send({
            message:`${findres.name} login successfully.`,
            data:findres,
            active:true,
    
        })
    }else{
        res.send({message:"User not found"});
    }
  }).catch((error)=>{
   res.send({error:error});
  })

});
module.exports = router;
