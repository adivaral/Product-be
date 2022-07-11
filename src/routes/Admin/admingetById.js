const express = require("express");
const router = express.Router();
const AdminModel = require("../../schemas/admin/adminSchema");
//admin by id:
router.get('/getadminInfo/:id',(req,res)=>{
    AdminModel.findById({_id:req.params.id}).then((response)=>{
        res.send({
            message:`${req.params.id} fetch successfully`,
            data:response
        })
    }).catch((error)=>{
        res.send({
            message:'Server error',
            description:error
        })
    })
})

module.exports=router;