const express = require("express");
const router = express.Router();
const UserModel = require("../../schemas/users/userSchema");
router.delete("/get-user-list/:id", async (req, res) => {
    await UserModel.findById({_id:req.params.id}).then((findRes)=>{
        if(findRes){
            UserModel.remove({_id:req.params.id}).then((response)=>{
                res.send({
                    message:`${req.params.id} deleted successfully.`,
                });
              }).catch((err)=>{
                res.send(err);
              });
        }else{
            res.send(`${req.params.id} user not found.`)
        }
    }).catch((err)=>{
        res.send(err)
    })
    
});

module.exports=router;