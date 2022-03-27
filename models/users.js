const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    name:{
        type:String,
        required:[true, "Please enter the name"]
    },
    age:{
        type:String,
        required:[true, "Please enter the age"]
    },
    phone:{
        type:String,
        required:[true, "Please enter the phone"]
    },
    image:{
        type: String,
        required:[true, "Please fill the image"]
    },
    email:{
        type:String,
        required:[true, "Please enter the Services"]
    },
    password:{
        type:String,
        required:[true, "Please enter the password"]
    }
    

})
const User = mongoose.model("user",userSchema );

module.exports= User;