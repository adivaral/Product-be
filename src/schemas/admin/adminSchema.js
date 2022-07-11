const mongoose=require('mongoose');
const adminSchema = new mongoose.Schema({
    name:{type:String},
    admin:{type:Boolean},
    access:{type:String},
    birthdate:{type:String},
    city:{type:String},
    country:{type:String},
    eid:{type:Number},
    email:{type:String},
    firstname:{type:String},
    lastname:{type:String},
    phoneno:{type:String},
    state:{type:String},
    yearofjoin:{type:String},
})
const Admin = mongoose.model("Admin", adminSchema);
module.exports=Admin;
