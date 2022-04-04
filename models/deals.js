

const mongoose = require("mongoose");

const DealsSchema = mongoose.Schema({

    servPhone:{
        type:String
    },

    userPhone:{
        type:String
      
    },

    date:{
        type:String
    },
    message:{
        type:String
    }

});

const Deals = mongoose.model("Deals",DealsSchema);

module.exports = Deals;
