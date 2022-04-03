import React, { useEffect, useRef, useState } from 'react';
import Conversation from './conversation';
import Message from './message';
import "./chat.css";
import axios from 'axios';
import {io} from "socket.io-client";

const Chat = () => {

    const contact = '6047251852';
    const [currentChat, setCurrentChat]= useState(null);
    const [messages, setMessages] = useState([]);
    const [conversation,setConversation]=useState([]);
    const [newMessage, setNewMessage]= useState([]);
    const socket= useRef();
    const [arrivalMessage, setArrivaMessage] = useState(null);



    useEffect(()=>{
        socket.current= io("ws://localhost:8900");
    },[]);
    console.log(socket);

    // useEffect(()=>{
    //     socket.current= io("ws://localhost:8900");
    // },[]);

    

    useEffect(()=>{
        socket.current.emit("addUser",contact);
        socket.current.on("getUsers",contacts=>{
            console.log(contacts);
        })
    },[contact]);

    useEffect(()=>{
        socket.current.on("getMessage", data=>{
            console.log("GotMessage");

            setArrivaMessage({
                sender:data.senderId,
                text:data.text,
                createdAt: Date.now()
            });
        });
    },[arrivalMessage]);

    useEffect(()=>{
        arrivalMessage && currentChat?.members.includes(arrivalMessage.sender)&&
        setMessages((prev)=>[...prev,arrivalMessage]);
        // console.log(messages);
    },[arrivalMessage, currentChat]);




    useEffect(()=>{
        axios.get("http://localhost:5000/api/conversation/"+contact)
        .then(resp=>{setConversation(resp.data)})
        .catch(err=>console.log(err));
    },[]);

    // console.log(currentChat);

    useEffect(()=>{

        const getMessages= async()=>{

          const res= await axios.get("http://localhost:5000/api/message/"+currentChat._id)
      
          setMessages(res.data);
        }

        getMessages()
      
    },[currentChat]);

    const handleSubmit= async()=>{

        const message = {
            sender: contact,
            text:newMessage,
            convId: currentChat._id
        }

        const receiverId = currentChat.members.find(member=> member!==contact);

        socket.current.emit("sendMessage",{
            senderId:contact,
            receiverId:receiverId,
            text:newMessage
        });

        try{
            const res= await axios.post("http://localhost:5000/api/message",message);
            setMessages([...messages,res.data]);
            setNewMessage("");

        }catch(err){
            console.log(err);
        }
    }

    return ( 
    <div className='chat'>
            <div className='chatMenu'>
                <div className='chatMenuWrapper'> 
                {conversation.map((c)=>(
                    <div onClick={()=>setCurrentChat(c)} key={c._id}>
                    <Conversation conversation={c} currentUser={contact}/>
                    </div>
                ))}
               
                </div>
            </div>

            <div className='chatBox'>
                <div className='chatBoxWrapper'>
                 {currentChat ? 
                   <> <div className="boxTop">
                      {
                          messages.map(m=>( 
                            <Message message={m} own={m.sender===contact}/>
                          ))
                      } 
                       
                       
                    

                    </div>
                   
                    <div className="boxBottom">
                        <textarea className='chatMessageBox' placeholder='Type here...' onChange={(e)=>setNewMessage(e.target.value)} ></textarea>
                        <button className='chatSubmitButtom' value={newMessage} onClick={handleSubmit}>Send</button>
                    </div>
                </> : <span className='randomMessage'>Select Conversation to start the chat</span> }
                </div>
            </div>

             </div> );
}
 
export default Chat;