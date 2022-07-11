const express = require("express");
const router = express.Router();
const UserModel = require("../../schemas/users/userSchema");
router.get("/get-user-list/:id", (req, res) => {
    UserModel.findById({_id:req.params.id}).then((response)=>{
    res.send({
        message:`${response.name} fetched successfully.`,
        data:response,
    });
  }).catch((err)=>{
    res.send(err);
  })
});

module.exports=router;