const io = require("socket.io")(8900,{

    cors:{
        origin:"http://localhost:3000",
    },
});

let contacts=[];


const addUser=(contact,socketId)=>{

    
    !contacts.some(cont=>cont.contact===contact) &&
            contacts.push({contact,socketId});
};

const removeUser=(socketId)=>{
    contacts = contacts.filter(cont=>cont.socketId!=socketId);

    return contacts;
}

const getUser = (contact)=>{
    return contacts.find(cont=>cont.contact===contact);
}


io.on("connection", (socket)=>{

    console.log("a user connected");

    //after every connection take contact and socket id
    socket.on("addUser",contact=>{
        addUser(contact,socket.id);
        io.emit("getUsers",contacts);
});

    socket.on("sendMessage", ({senderId,receiverId,text})=>{
            const user = getUser(receiverId);

            io.to(user.socketId.emit("getMessage",{
                senderId,
                text
            }));
    });

    socket.on("disconnect", ()=>{
        console.log("a user disconnected");
        removeUser(socket.id);
        io.emit("getUsers",contacts);
    });
});
