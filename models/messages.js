const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({


    convId:{
        type:String
    },
    sender:{
        type:String
    },
    text:{
        type: String
    }

},
{timestamps:true});

const Message = mongoose.model("messages", MessageSchema);

module.exports = Message;