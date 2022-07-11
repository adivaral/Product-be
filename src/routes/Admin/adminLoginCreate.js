const express = require("express");
const router = express.Router();
const AdminModel = require("../../schemas/admin/adminSchema");
const AdminLoginModel = require("../../schemas/admin/adminLoginSchema");
router.post("/new-admin/login-create", (req, res, next) => {
  AdminModel.findById({ _id: req.body.adminId })
    .then((findres) => {
        const adminLoginCreate = new AdminLoginModel({
            username: req.body.userName,
            password: req.body.passWord,
            adminid: req.body.adminId,
            email: findres.email,
            eid: findres.eid,
          });
        adminLoginCreate.save((error,response)=>{
            if(error){
                res.send(error)
            }else{
                res.send({
                    message:'Admin Login created successfully..',
                    data:response
                });
            }
      
        });
      
    })
    .catch((error) => {
      res.send({
        message: "User Not exist",
        description: error,
      });
    });
});
module.exports = router;
