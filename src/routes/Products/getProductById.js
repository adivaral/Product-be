const express = require("express");
const router = express.Router();
const ProductModel = require('../../schemas/products/productsSchema');
router.get('/products/:id',async (req,res)=>{
    await ProductModel.findOne({_id:req.params.id}).then((foundRes)=>{
        if(foundRes){
            res.status(200).send({
                message:'Products fetched successfully '+foundRes.productName,
                data:foundRes
            })
        }
    }).catch((err)=>{
        res.status(404).send({
            message:'product not found or removed',
            error:err
        })
    })
})
module.exports=router;