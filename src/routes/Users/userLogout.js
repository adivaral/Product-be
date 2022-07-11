const express = require("express");
const router = express.Router();
const UserModel = require("../../schemas/users/userSchema");
router.get("/new-user/logout/:id", (req, res) => {
    UserModel.findById({_id:req.params.id}).then((response)=>{
    res.send({
        message:`${response.name} logout successfully.`,
        data:null,
        active:false,
    });
  }).catch((err)=>{
    res.send(err);
  })
});

module.exports=router;