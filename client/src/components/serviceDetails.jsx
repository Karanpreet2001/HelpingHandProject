import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const ServiceDetail = () => {


    const location = useLocation();
    const {ser,user}= location.state;

    console.log(ser);

    const startChat=(serPhone)=>{

         
        const New ={
            serPhone:serPhone,
            user:user
        };

        const {data} = axios.post("http://localhost:5000/api/conversation", New );
        console.log(data);
    }
    let navigate = useNavigate();

    const deal=(serPhone)=>{

        navigate("/fixADeal", {state:{user,serPhone}});
    }

    return (
        <div className="">
        <div className="">
           
           
            <div className="">
                
                <h3>{ser.companyName}</h3>
                <br></br>
                <h6>{ser.owner}</h6>
                <p>{ser.services}</p>
                <h6>{ser.phone}</h6>
                <h6>{ser.email}</h6>
               
               <button className="" onClick={()=>startChat(ser.phone)}>Start Chat</button>
               <button className="" onClick={()=>deal(ser.phone)}>Make A Deal</button>

            </div>
            
        </div>
    </div>

     );
}
 
export default ServiceDetail;