const express = require("express");
const router = express.Router();
const UserModel = require("../../schemas/users/userSchema");
router.get("/get-user-list", (req, res) => {
    UserModel.find({}).then((response)=>{
    res.send({
        message:'All user list fetched successfully.',
        data:response,
    });
  }).catch((err)=>{
    res.send(err);
  })
});

module.exports=router;