import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./chat.css";

const Conversation = ({conversation, currentUser}) => {

    const [userContact, setUserContact]= useState([]);
    

    useEffect(async()=>{
        
        const servContact = conversation.members.find(m=>m!=currentUser);
      

        const getUser = async()=>{

            try{
              const res = await axios.get("http://localhost:5000/api/users/"+servContact);
            
              setUserContact(res.data);
            }catch(err){
              console.log(err)
            }
          }
          getUser()

    },[conversation,currentUser]);

  


    

    return ( <div className='conversationBox'>

    <img className='conversationImg' src={userContact[0]?.image}/>
    <span className='conversationName'>{userContact[0]?.name}</span>
    </div> );
}
 
export default Conversation;