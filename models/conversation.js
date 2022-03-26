
const mongoose = require('mongoose');

const ConversationSchema = mongoose.Schema({

    members:{
        type:Array
    }
}, {timestamps:true});

const conversation = mongoose.model("Conversation", ConversationSchema);

module.exports=conversation;

