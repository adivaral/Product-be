const express = require("express");
const router = express.Router();
const UserSchema = require("../../schemas/users/userSchema");
router.put("/new-user/update/:id",async(req, res, next) => {
  const userUpdate={
      name:`${req.body.firstName} ${req.body.lastName}`,
      birthdate:req.body.birthDate,
      email:req.body.email,
      gender:req.body.gender,
      firstname:req.body.firstName,
      lastname: req.body.lastName,
      phoneno: req.body.phoneNo,
      username:req.body.userName,
      address:req.body.address,
      pincode:req.body.pin,
      password:req.body.passWord,
      alternate_phno:req.body.alterNate_PhoneNo,
      privacy_policy:req.body.privacy_policy,
  }
  await UserSchema.findById({_id:req.params.id}).then(async(findres)=>{
    if(findres){
      await UserSchema.findByIdAndUpdate({_id:req.params.id},userUpdate).then((response)=>{
        res.send({
          message:`${req.params.id} updated successsfully.`,
          data:response,
        })
      }).catch((err)=>{
        res.send(400).send({message:'Server Error',error:err});
      })
    }else{
      res.send({
        message:'User not found'
      });
    }
  }).catch((err)=>{
    res.send(err);
  })
});
module.exports = router;
