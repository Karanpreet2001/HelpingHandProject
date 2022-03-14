import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {Container, Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/home.css";

const Home = (city) => {


    const [data, setData]=useState("");

    const handleChange=(e)=>{
        const target=e.target;

        if(target.id==="data")
            setData(target.value);
      
    }

//home made

    return ( 
        
        <Container>
            <div className="homeContainer">   
                <section className="hero">
                    <div className='row'>
                        <div className='col-4'>
                            <img src="logo.png" alt="logo" className='img-fluid' width="200px"></img>
                        </div>
                        <div className='col-8'>
                            <h1 className='mt-5 heading'>Helping Hand</h1>
                        </div>
                        <p className="text-center">Add a 4-5 word tagline here.</p>
                        <hr/>
                    </div>
                </section>
                <section className='form'>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">  
                            <Form.Label>Select your city from below:</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option isValid="true">Select City</option>
                                <option value="Vancouver">Vancouver</option>
                                <option value="Toronot">Toronto</option>
                            </Form.Select>
                            <Form.Text className="text-muted">
                                Only availible in selected cities for now.
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    {/* <form>
                        <p>Enter Your City Name</p>
                        <input type="text"  id="data" className="form-control" onChange={handleChange} />
                        <Link to="/location" state={{data:data}} >Submit</Link>
                    </form> */}
                </section>
            </div>  
        </Container>
    
     );
}
 
export default Home;