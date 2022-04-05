import React from 'react';
import { useLocation } from 'react-router';
import ServiceListItem from './ServiceListItem';
import {Container} from 'react-bootstrap';
import "./main.css";
import "../styles/services.css";

const Services = ({services}) => {

    const location=useLocation();
    const{data, service, user}=location.state;

    const orgService = services.filter((service)=>service.city === data);
    const orgSer = orgService.filter((ser)=>ser.occupation === service);
        
    return ( 
        <Container className="new"> 
            <h2 className='head'>List of {service}s in your area:</h2>      
            {orgSer.map((ser, key)=>(       
                <ServiceListItem key={ser._id} sp_id={ser.sp_id} owner={ser.owner} phone={ser.phone} email={ser.email} ser={ser} user={user} image={ser.image} companyName={ser.companyName}/>
            ))}
        </Container>

     );
}
 
export default Services;