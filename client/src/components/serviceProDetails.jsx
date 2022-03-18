import React from 'react';
import './main.css';

import { Link } from 'react-router-dom';



const ServiceProvider = ({services,onUpdate, onDelete, onViewMessage}) => {

    const username="max";

    const serviceProDetails = services.filter((service)=>service.username === username);

    const myStyle = {
        
            position: "fixed",
            bottom: "30px",
            right: "30px",
          
    }


    return ( <div>

            {
                serviceProDetails.map((detail)=>(
                    <div key = {detail.sp_id}>
                    <h1>Hello, {detail.owner}</h1>
                    <h2>{detail.owner}</h2>
                    <h2>{detail.services}</h2>
                    <button type="button" className="btn btn-warning btn" onClick={()=>onUpdate(detail)}>Update Data</button> &nbsp; &nbsp;
                    <button type="button" className="btn btn-danger btn" onClick={()=>onDelete(detail)}>Delete Data</button> &nbsp; &nbsp;
                    <button type="button" className="btn btn-secondary btn"onClick={()=>onViewMessage(detail)}>View Messages</button> &nbsp; &nbsp;

                    </div>
                ))
            }

{/* 
<button style={myStyle} className="btn btn-secondary btn">Add New Service</button>  */}
<Link to="/addService"><button type="button" style={myStyle} className="btn btn-primary m-2">Add New Service</button></Link>


    </div> );
}
 
export default ServiceProvider;