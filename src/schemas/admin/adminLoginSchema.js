const mongoose=require('mongoose');
const adminLoginSchema = new mongoose.Schema({
    username:{type:String},
    password:{type:String},
    email:{type:String},
    eid:{type:Number},
    adminId:{type:String},
})
const AdminLogin = mongoose.model("AdminLogin", adminLoginSchema);
module.exports=AdminLogin;
