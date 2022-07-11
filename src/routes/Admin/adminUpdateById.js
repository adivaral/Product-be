const express = require("express");
const router = express.Router();
const AdminModel = require("../../schemas/admin/adminSchema");
router.put("/new-admin/update",async(req, res, next) => {
  const adminUpdate={
    name:`${req.body.firstName} ${req.body.lastName}`,
    firstname:req.body.firstName,
    lastname: req.body.lastName,
  }
  await AdminModel.findByIdAndUpdate({_id:req.body.id},adminUpdate).then((response)=>{
    res.send({
      message:`${req.body.id} updated successsfully.`,
      data:response,
    })
  }).catch((err)=>{
    res.send(400).send({message:'Server Error',error:err});
  })
});
module.exports = router;
