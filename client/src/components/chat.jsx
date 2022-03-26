import React from 'react';
import Conversation from './conversation';
import Message from './message';
import "./chat.css";


const Chat = () => {



    return ( 
    <div className='chat'>
            <div className='chatMenu'>
                <div className='chatMenuWrapper'> 
                    <Conversation/>
                    <Conversation/>
                    <Conversation/>
                    <Conversation/>
                    <Conversation/>

                </div>
            </div>

            <div className='chatBox'>
                <div className='chatBoxWrapper'>
                    <div className="boxTop">
                        <Message/>
                        <Message/>
                        <Message/>
                        <Message/>
                        <Message/>

                    </div>
                    <div className="boxBottom">
                        <textarea className='chatMessageBox' placeholder='Type here...' id="" ></textarea>
                        <button className='chatSubmitButtom'>Send</button>
                    </div>
                </div>
            </div>

             </div> );
}
 
export default Chat;