const express = require("express");
const router = express.Router();
const AdminModel = require("../../schemas/admin/adminSchema");
const AdminLoginModel = require("../../schemas/admin/adminLoginSchema");
router.get('/new-admin/logout/:eid', (req,res)=>{
    AdminLoginModel.findOne(({eid:req.params.eid})).then((found)=>{
        AdminModel.findOne({eid:found.eid}).then(async (response)=>{
        await res.send({
                message:`${found.username} logout successfully`,
                data:response,
                active:false
            })
        }).catch((error)=>{
            res.send('User not register!!!')
        })
    }).catch((err)=>{
        res.send({message:'User not exist!!!',error:err.response})
    })
})
module.exports = router;
