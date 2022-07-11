const express = require("express");
const router = express.Router();
const AdminModel = require("../../schemas/admin/adminSchema");
router.post("/new-admin", (req, res, next) => {
  AdminModel.findOne({eid:req.body.eid}).then((findres)=>{
    res.send(`${findres.firstname.charAt(0)}***${findres.firstname.charAt(findres.firstname.length-1)} ${findres.lastname.charAt(0)}***${findres.lastname.charAt(findres.lastname.length-1)} is already register with eid ${findres.eid}.`)
  }).catch(()=>{
    const admin = new AdminModel({
      name:`${req.body.firstName} ${req.body.lastName}`,
      admin: true,
      access: "first-class",
      birthdate:req.body.birthDate,
      city: req.body.city,
      country:req.body.country,
      eid: req.body.eid,
      email:req.body.email,
      firstname:req.body.firstName,
      lastname: req.body.lastName,
      phoneno: req.body.phoneNo,
      state:req.body.state,
      yearofjoin:req.body.yearOfJoin,
    });
    admin.save((error,response)=>{
        if(error){
            res.send(error)
        }else{
            res.send({
                message:'Admin created successfully..',
                info:response
            });
        }
  
    });

  })

});
module.exports = router;
