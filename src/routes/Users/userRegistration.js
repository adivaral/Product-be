const express = require("express");
const router = express.Router();
const UserModel = require("../../schemas/users/userSchema");
router.post("/new-user", (req, res, next) => {
  UserModel.findOne({email:req.body.email}).then((findres)=>{
    res.send(`${findres.firstname.charAt(0)}***${findres.firstname.charAt(findres.firstname.length-1)} ${findres.lastname.charAt(0)}***${findres.lastname.charAt(findres.lastname.length-1)} is already register with email ${findres.email}.`)
  }).catch(()=>{
    const admin = new UserModel({
      name:`${req.body.firstName} ${req.body.lastName}`,
      admin: false,
      access: "second-class",
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
      subscription:req.body.subscription,
    });
    admin.save((error,response)=>{
        if(error){
            res.send(error)
        }else{
            res.send({
                message:'User created successfully..',
                data:response
            });
        }
  
    });

  })

});
module.exports = router;
