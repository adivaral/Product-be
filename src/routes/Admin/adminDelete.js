const express = require("express");
const router = express.Router();
const AdminModel = require("../../schemas/admin/adminSchema");
const AdminLoginModel = require("../../schemas/admin/adminLoginSchema");
router.delete('/new-admin/:id',async(req, res, next) => {
  await AdminModel.remove({_id:req.params.id}).then((response)=>{
  AdminLoginModel.remove({eid:response.eid});
    res.send(`${req.params.id} deleted successsfully.`)
  }).catch((err)=>{
    res.send(400).send({message:'Server Error',error:err});
  })
});
module.exports = router;
