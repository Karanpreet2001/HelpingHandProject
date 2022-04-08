import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Container, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import "../styles/serviceDetails.css";

const ServiceDetail = () => {

    const location = useLocation();
    let navigate = useNavigate();
    const {ser,user}= location.state;

    const startChat=(e)=>{
        e.preventDefault();
        const New ={
            serPhone:ser.serPhone,
            user:user
        };
        const {data} = axios.post("http://localhost:5000/api/conversation", New );
        console.log(data);
    }

    const deal=(e)=>{
        e.preventDefault();
        navigate("/fixADeal", {state:{user: user, serPhone: ser.serPhone}});
    }

    return (
        <Container >
            <Card className="serviceDetailsCard">
                <Card.Img variant="top" src={ser.image} />
                <Card.Body>
                    <Card.Title>{ser.owner}</Card.Title>
                    <Card.Text>{ser.companyName}</Card.Text>
                    <Card.Text>{ser.services}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>{ser.phone}</ListGroupItem>
                    <ListGroupItem>{ser.email}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button onClick={e => deal(e)} style={{marginRight: "1em"}}>Book appointment</Button>
                    <Button onClick={e => startChat(e)}>Chat</Button>
                </Card.Body>
            </Card>
        </Container>
     );
}
 
export default ServiceDetail;