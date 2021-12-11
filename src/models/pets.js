const mongoose=require('mongoose');

const petSchema=mongoose.Schema({
    name:{
        type:String
    },
    dogname:{
        type:String
    },
    breed:{
        type:String
    },
    age:{
        type:String,
    },
    email:{
        type:String,
    },
    phone:{
        type:Number,
    }
})

//collection
const Pet=mongoose.model("Pet",petSchema);
module.exports=Pet;