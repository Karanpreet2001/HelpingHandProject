

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
    deal:{
        type:String,
        required:[true, "Please enter the deal"]
    },
    city:{
        type:String,
        required:[true, "Please enter the city"]
    },
    message:{
        type:String,
        required:[true, "Please enter the message"]
    },
    image:{
        type:String,
        required:[true, "Please enter the image"]
    },
    occupation:{
        type:String,
        required:[true, "Please enter the accupation"]
    },username:{
        type:String,
        required:[true, "Please enter the accupation"]
    }
 
});

const ServiceProvider = mongoose.model("ServiceProvider", serviceProviderSchema);


module.exports=ServiceProvider;