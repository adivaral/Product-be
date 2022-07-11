const mongoose=require('mongoose');
const productSchema = new mongoose.Schema({
    productName:{type:String},
    stock:{type:Boolean},
    color:{type:String},
    description:{type:String},
    pkgDate:{type:String},
    category:{type:String},
    subCategory:{type:String},
    thirdCategory:{type:String},
    sector:{type:String},
    userClass:{type:String},
    expiryDate:{type:String},
    companyHeadOffice:{type:String},
    price:{type:Number},
    productImgUrl:{type:String},
    counytryOfOrigin:{type:String},
    govtApproved:{type:Boolean},
    launched:{type:Boolean},
    expectedLaunchDay:{type:String},
    launchVenue:{type:String},
    createdDate:{type:String},
    productUniqueNo:{type:String},
    productSpecification:{type:Object}
})
const Product = mongoose.model("Product", productSchema);
module.exports=Product;
