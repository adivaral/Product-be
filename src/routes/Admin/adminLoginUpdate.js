const express = require("express");
const router = express.Router();
const AdminLoginModel = require("../../schemas/admin/adminLoginSchema");
router.put("/new-admin/login-update",async (req, res, next) => {
  const adminLoginUpdate={
    username: req.body.userName,
    password: req.body.passWord,
  }
   await AdminLoginModel.findByIdAndUpdate({_id:req.body.id},adminLoginUpdate).then((response)=>{
    res.send({
      message:`${response.username} updated successsfully.`,
      data:response,
    })
  }).catch((err)=>{
    res.send(400).send({message:'Server Error',error:err});
  })
});
module.exports = router;
