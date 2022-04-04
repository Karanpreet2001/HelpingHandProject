import React, { useState } from 'react';
import { useLocation } from 'react-router';

import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';


const Deals = () => {

    let location = useLocation();
    const {serPhone, user}=location.state;

    const [date, setDate]= useState(null);
    const [msg,setMsg]= useState(null);
    const [reply, setReply] = useState(null);
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        const New = {
            servPhone:serPhone,
            userPhone:user,
            date:date,
            message:msg,
        }

        const {data} = axios.post("http://localhost:5000/api/deals", New);
            setReply("Your Request is delivered");
    }

    return ( <div>


        <form>
       
        <label>Select the date</label>
       <DatePicker selected={date} onChange={date =>setDate(date)}/> <br />
       <label>Write a message here...</label>
       <textarea rows='2' cols='10' placeholder='Type here...' onChange={(e)=>setMsg(e.target.value)} ></textarea>
        <button className='btn btn-secondary' onClick={(e)=>handleSubmit(e)}>Submit</button>
       </form>
       {reply}
    
    </div> );
}
 
export default Deals;