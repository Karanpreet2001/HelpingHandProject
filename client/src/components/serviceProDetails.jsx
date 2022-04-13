import React, { useState } from 'react';
import './main.css';
import {useLocation} from "react-router";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';



const ServiceProvider = ({services,onUpdate, onDelete, onViewMessage}) => {

    const location=useLocation();
    const data = location.state.username;
    const password= location.state.password;
    console.log(data);

    const navigate = useNavigate();

    const serviceProDetails = services.filter((service)=>service.username === data);

    const myStyle = {
        
            position: "fixed",
            bottom: "30px",
            right: "30px",
          
    }
    // var name = serviceProDetails[0].owner;

  
    const handleNewDelete=(detail)=>{
      console.log("Delete is clicked");
      console.log(detail._id);

      // navigate("/dialog", {state:{id:detail._id}});
      

      if(window.confirm("Are you sure you want to delete?")){
        
        const {data} = axios.delete("http://localhost:5000/api/SPInfo/"+detail._id);
      }

    }

    const startChat=()=>{
      navigate("/chat", {state:{contact:password}});
    }


    return ( <div>

            
                {/* <div className='name'>Hi, <span className="names">{name}</span></div> */}

               
            
                <table className="table table-sm">
                <thead>
                  <tr className="table-primary">
                    <th scope="col">S.P. Id</th>
                    <th scope="col">Image</th>
                    <th scope="col">Company Name</th>
                    <th scope="col">Services</th>
                    <th scope="col">Address</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Action</th>
                    
  
                  </tr>
                </thead>
                <tbody>
                  
                      { serviceProDetails.map((detail)=>(
                          <tr key = {detail.sp_id}>
                    
                    <td>{detail.sp_id}</td>
                    <td><img className='imgOwner' src={detail.image} width="50px" height="50px"/>  </td>
                    <td>{detail.companyName}</td>
                    <td>{detail.services}</td>
                    <td>{detail.address}</td>
                    <td>{detail.phone}</td>
                    <td> <button type="button" className="btn btn-danger btn" onClick={()=>handleNewDelete(detail)}>Delete</button> &nbsp; <button type="button" className="btn btn-warning btn"onClick={()=>onUpdate(detail)}>Update</button> </td>
                    </tr>

                ))
                      }
                  
                 
                
                   
                </tbody>
              </table>

              
               
            
<button type="button" style={myStyle} onClick={()=>startChat()} className="btn btn-primary m-2">Chat</button>


    </div> );
}
 
export default ServiceProvider;