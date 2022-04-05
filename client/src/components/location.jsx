
import React, { useState } from 'react';
import { useLocation } from 'react-router';
import {useNavigate} from "react-router-dom";
import { Container, Button } from 'react-bootstrap';
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

    let navigate = useNavigate();

    const submitBtn = (e) => {
        e.preventDefault();
        navigate("/services", {state: {data:data, service:service, user:user}});
    }

    return ( 
        <Container>
            <div className="w720">

            <h1>Which Service are you looking for in {data}?</h1>
            <input type="text"  id="location" className="form-control" onChange={handleChange} />
            
            <Button variant="primary" type="submit" onClick={submitBtn} className="mt-3">
                Submit
            </Button>
            {/* <Link to={"/services"} state={{data:data,service:service,user:user}}>Submit</Link> */}
                
            </div>
        </Container>
     );
}
 
export default Location;