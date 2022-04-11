import React from 'react';
// import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Navbar, Nav} from 'react-bootstrap';
import '../styles/header.css';

const Header = () => {
    return ( 
        

       
            <nav>
        <h1>Helping Hand</h1>
        
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/chat">Chat</a></li>
                <li><a href="/contact">Contact</a></li>


            </ul>

            <div className="cta">
            <button>Sign Out</button>
        </div>
        </nav>
       

        
      




     );
}
 
export default Header;


        {/* <Navbar bg="dark" variant="dark" className="py-3">
          <Container>
          <Navbar.Brand href="/" className="navTitle"></Navbar.Brand>
          
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/chat">Chat</Nav.Link>
 

            <Nav.Link href="/signin" className="signInBtn">Sign In</Nav.Link>
          </Nav>
          </Container>
        </Navbar> */}
