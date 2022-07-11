const express = require("express");
const router = express.Router();
const AdminModel = require("../../schemas/admin/adminSchema");
const AdminLoginModel = require("../../schemas/admin/adminLoginSchema");
router.post('/new-admin/login', (req,res)=>{
    AdminLoginModel.findOne(({username:req.body.userName,password:req.body.passWord})).then((found)=>{
        AdminModel.findOne({eid:found.eid}).then(async (response)=>{
        await res.send({
                message:`${found.username} fetch successfully`,
                data:response,
                active:true
            })
        }).catch((error)=>{
            res.send('User not registered!!!')
        })
    }).catch((err)=>{
        res.send({message:'User not exist!!!',error:err.response})
    })
})
module.exports = router;
