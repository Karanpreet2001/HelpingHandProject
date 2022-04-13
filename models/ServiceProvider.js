

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
      
    },
    phone:{
        type:String,
      
    },
    email:{
        type:String,
     
    },
    address:{
        type:String,
     
    },
   
    city:{
        type:String,
       
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
    },
    password:{
        type:String,
        required:[true, "Please enter the password"] 
    }
 
});

const ServiceProvider = mongoose.model("ServiceProvider", serviceProviderSchema);


module.exports=ServiceProvider;