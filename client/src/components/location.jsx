
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
        <>
        <Container>
            <div className="w720">

            <h1 style={{color: "black", textAlign:"center", textTransform:"uppercase"}}>Which Service are you looking for in <i><u>{data}</u></i>?</h1>
            <input type="text"  id="location" className="form-control" onChange={handleChange} />
            
            
            <Button style={{marginLeft:"247px", padding:"10px 45px"}} variant="primary" type="submit" onClick={submitBtn} className="mt-3">
                Submit
            </Button>
            
                
            </div>
        </Container>


        <div className="gridView">
            <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJpH1tfFpcVJ_MVmwSG6Wt2TistpCWdtot1zSozhcUKgkLgrR70q8fKRAueAGfudSWe4&usqp=CAU'/><h4>Carpenter</h4></div>
            <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdQwjSsRvuRiqrWmy8xhCzjNYlIQ3jwnb1iw&usqp=CAU' height="" width=""/><h4>Barber</h4></div>
            <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTpHN_5bgtl_jRMcm46j9mni-y2w70Y56E5g&usqp=CAU' height="" width=""/><h4>Laundary</h4></div>
            <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQinZDK0s7AJSpQ7NXOYtjnscNr8gwQQln07Q&usqp=CAU' height="" width=""/><h4>Driver</h4></div>
            <div><img src='https://www.benjaminfranklinplumbing.com/images/blog/10-Reasons-Why-a-Professional-Plumber-Is-Better-Than-DIY-_-Katy-TX.jpg' height="" width=""/><h4>Plumber</h4></div>
            <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ2assPO4c8TeX3-t9eCbJgeDU9yVeqbRtzg&usqp=CAU' height="" width=""/><h4>Cook</h4></div>
            <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKgvXzenFQ3eN6OxpkFnnXM98YseKOiZ1W3w&usqp=CAU' height="" width=""/><h4>DJ</h4></div>  
        </div>
        </>
     );
}
 
export default Location;