import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
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
               
               <button className="" onClick={startChat(ser.phone)}>Start Chat</button>
               <button className="">Make A Deal</button>

            </div>
            
        </div>
    </div>

     );
}
 
export default ServiceDetail;