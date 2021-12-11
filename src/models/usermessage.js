const mongoose=require('mongoose');
const validator=require("validator");

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email id")
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

//collection
const User=mongoose.model("User",userSchema);
module.exports=User;