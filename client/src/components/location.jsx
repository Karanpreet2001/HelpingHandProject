
import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import "../styles/location.css";

const Location = (props) => {

    const [service,setService]=useState("");
    const location = useLocation();

    const user = location.state.user;
    const data = location.state.finalVal;

    const handleChange=(e)=>{
        const target=e.target;
        if(target.id==="location")
            setService(target.value); 
    }

    return ( 
        <Container>
            <div className="w720">

            <h1>Which Service are you looking for in {data}?</h1>
            <input type="text"  id="location" className="form-control" onChange={handleChange} />

            <Link to={"/services"} state={{data:data,service:service,user:user}}>Submit</Link>
                
            </div>
        </Container>
     );
}
 
export default Location;