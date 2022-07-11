const express = require("express");
const router = express.Router();
const ProductModel = require('../../schemas/products/productsSchema');
router.get('/products',(req,res)=>{
    ProductModel.find(req.query).then((foundRes)=>{
        if(foundRes.length > 0){
            res.status(200).send({
                message:'All products fetched successFully...',
                searchBy:req.query,
                total:foundRes.length,
                data:foundRes,
            })
        }else{
            res.status(404).send({
                message:'Products not found.'
            })
        }
    }).catch((err)=>{
        res.status(404).send({
            message:'error occoured',
            error:err
        });
    })
})


module.exports=router;