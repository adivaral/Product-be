const express = require("express");
const router = express.Router();
const ProductModel = require('../../schemas/products/productsSchema');

router.post('/add-new-product',(req,res)=>{
    const Product = new ProductModel({
    productName:req.body.productName,
    stock:req.body.stock,
    color:req.body.color,
    description:req.body.description,
    pkgDate:req.body.pkgDate,
    category:req.body.category,
    sector:req.body.sector,
    userClass:req.body.userClass,
    expiryDate:req.body.expiryDate,
    companyHeadOffice:req.body.companyHeadOffice,
    price:req.body.price,
    productImgUrl:req.body.productImgUrl,
    counytryOfOrigin:req.body.counytryOfOrigin,
    govtApproved:req.body.govtApproved,
    launched:req.body.launched,
    expectedLaunchDay:req.body.expectedLaunchDay,
    launchVenue:req.body.launchVenue,
    subCategory:req.body.subCategory,
    thirdCategory:req.body.thirdCategory,
    createdDate:new Date().toLocaleDateString(),
    productUniqueNo:req.body.productUniqueNo,
    productSpecification:req.body.productSpecification,
    })
   
    ProductModel.findOne({productUniqueNo:Product.productUniqueNo}).then((foundRes)=>{
        if(foundRes){
            res.status(404).send({
                message:`product is already registered wit this unique id ${foundRes.productUniqueNo}`
            })
        }else{
            Product.save((error,response)=>{
                if(error){
                    res.send(error)
                }else{
                    res.status(200).send({
                        message:'Product created successfully..',
                        data:response
                    });
                }
          
            });
        }
    })
})

module.exports=router;
