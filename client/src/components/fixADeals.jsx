import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import '../styles/deal.css'


const Deals = () => {

    let location = useLocation();
    let navigate = useNavigate();

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
            setReply("Your Request is delivered. You will be redirected to choosing city page.");
            setTimeout(5000, () => {
                navigate("/home")
            })
    }

    return ( 
        <Container style={{width: "25rem", margin: "auto"}}>
            <h3 className='mt-5'>Book an Appointment:</h3>
            <Form>
                <Form.Group className='mb-3'>
                    <Form.Label>Date:</Form.Label>
                    <DatePicker selected={date} onChange={date =>setDate(date)}/> <br />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Write a note (Optional): </Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={(e)=>setMsg(e.target.value)} placeholder='Type here...'/>
                </Form.Group>

                <Button type="submit" onClick={(e)=>handleSubmit(e)}>Submit</Button>
            </Form>
            {reply}    
        </Container> );
}
 
export default Deals;