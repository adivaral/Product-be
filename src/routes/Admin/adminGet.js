const express = require("express");
const router = express.Router();
const AdminModel = require("../../schemas/admin/adminSchema");
router.get("/getadminInfo", (req, res) => {
  AdminModel.find({}).then((response)=>{
    res.send(response);
  }).catch((err)=>{
    res.send(err);
  })
});

module.exports=router;