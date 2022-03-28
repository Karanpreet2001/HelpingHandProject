import React, { useEffect, useState } from 'react';
import Conversation from './conversation';
import Message from './message';
import "./chat.css";
import axios from 'axios';

const Chat = () => {

    const contact= 6047251852;
    const [currentChat, setCurrentChat]= useState(null);
    const [messages, setMessages] = useState([]);
    const [conversation,setConversation]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:5000/api/conversation/"+contact)
        .then(resp=>{setConversation(resp.data)})
        .catch(err=>console.log(err));
    },[]);

    console.log(currentChat);

    useEffect(()=>{
        axios.get("http://localhost:5000/api/conversation/"+currentChat?._id)
        .then(resp=>setMessages(resp.data))
        .catch(err=>console.log(err));
    },[currentChat])

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
                          messages.map(m=>{
                            <Message message={m} own={m.sender===contact}/>
                          })
                      } 
                       
                       
                    

                    </div>
                   
                    <div className="boxBottom">
                        <textarea className='chatMessageBox' placeholder='Type here...' id="" ></textarea>
                        <button className='chatSubmitButtom'>Send</button>
                    </div>
                </> : <span className='randomMessage'>Select Conversation to start the chat</span> }
                </div>
            </div>

             </div> );
}
 
export default Chat;