const mongoose=require('mongoose');
const userSchema = new mongoose.Schema({
    name:{type:String},
    admin:{type:Boolean},
    access:{type:String},
    birthdate:{type:String},
    email:{type:String},
    firstname:{type:String},
    lastname:{type:String},
    phoneno:{type:String},
    username:{type:String},
    address:{type:String},
    pincode:{type:Number},
    password:{type:String},
    alternate_phno:{type:String},
    privacy_policy:{type:Boolean},
    subscription:{type:Boolean},
    gender:{type:String},
})
const User = mongoose.model("User", userSchema);
module.exports=User;
