import axios from 'axios';
// import res from 'express/lib/response';
import React, { useEffect, useState } from 'react';
import {format} from "timeago.js";
import "../styles/message.css";

const Message = ({message, own}) => {

    const [userImage, setUserImage]= useState([]);
    console.log(message,own);
    console.log(message.sender,own);
 
    useEffect(async()=>{

        const resp= await axios.get("http://localhost:5000/api/user/"+message.sender);
        
       
        setUserImage(resp.data);
        

    },[message]);


    return ( <div className={own ? "message own":"message"}>
            <div className='messageTop'>
                <img className='messageImg' src={userImage[0]?.image} alt=""/>
                <p className='messageText'>{message.text}</p>
            </div>
            <div className='messageBottom'>{format(message.createdAt)}</div>

            
    </div> );
}
 
export default Message;