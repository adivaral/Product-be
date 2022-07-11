const express = require("express");
const router = express.Router();
const ProductModel = require('../../schemas/products/productsSchema');
router.put('/products-update/:id',async (req,res)=>{
    await ProductModel.findByIdAndUpdate({_id:req.params.id},req.body).then((foundRes)=>{
        if(foundRes){
            res.status(200).send({
                message:'Products UPDATED successfully '+foundRes.productName,
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