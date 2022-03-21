

const mongoose = require("mongoose");

const serviceProviderSchema= new mongoose.Schema({


    sp_id:{
        type:String,
        required:[true, "Please enter the business id"]
    },
    owner:{
        type:String,
        required:[true, "Please enter the Name of Service Provider"]
    },
    companyName:{
        type:String,
        required:[true, "Please enter the Name of Company"]
    },
    services:{
        type:String,
        required:[true, "Please enter the Services"]
    },
    phone:{
        type:String,
        required:[true, "Please enter the Phone Number"]
    },
    email:{
        type:String,
        required:[true, "Please enter the E-Mail"]
    },
    address:{
        type:String,
        required:[true, "Please enter the Address"]
    },
   
    city:{
        type:String,
        required:[true, "Please enter the city"]
    },
   
    image:{
        type:String
    },
    occupation:{
        type:String,
        required:[true, "Please enter the occupation"]
    },
    username:{
        type:String,
        required:[true, "Please enter the username"]
    }
 
});

const ServiceProvider = mongoose.model("ServiceProvider", serviceProviderSchema);


module.exports=ServiceProvider;