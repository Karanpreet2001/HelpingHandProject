

const mongoose = require("mongoose");

const LoginSchema = mongoose.Schema({

    username:{
        type:String,
        required :[true, "Please Enter the Username"]
    },

    password:{
        type:String,
        required :[true, "Please Enter the Password"]
    },

    type:{
        type:String,
        required: [true, "Please Enter the Type of User"]
    }

});

const Login = mongoose.model("Login",LoginSchema);

module.exports = Login;
