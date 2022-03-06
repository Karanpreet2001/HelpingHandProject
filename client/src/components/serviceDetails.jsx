import React from 'react';
import { useLocation } from 'react-router-dom';

const ServiceDetail = () => {


    const location = useLocation();
    const {ser}= location.state;

    console.log(ser);

    return (
        <div className="container w-50 p-4">
        <div className="row">
           
            <div className="col">
                <h3>{ser.companyName}</h3>
                <br></br>
                <h6>{ser.owner}</h6>
                <h4>{ser.services}</h4>
                <h6>{ser.phone}</h6>
                <h6>${ser.email}</h6>
               
            </div>
            
        </div>
    </div>

     );
}
 
export default ServiceDetail;