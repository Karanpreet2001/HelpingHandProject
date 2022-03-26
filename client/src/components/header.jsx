import React from 'react';
// import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Navbar, Nav} from 'react-bootstrap';
import '../styles/header.css';

const Header = () => {
    return ( 
        <div>

        <Navbar bg="dark" variant="dark" className="py-3">
          <Container>
          <Navbar.Brand href="#home" className="navTitle">Helping Hand</Navbar.Brand>
          
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/chat">Chat</Nav.Link>
 

            <Nav.Link href="/signin" className="signInBtn">Sign In</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
{/* 
        <header>
          <h1 className="display-2 bg-secondary text-white text-center p-2 mb-0">HELPING HAND</h1>
        </header>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/contact">contact</Link>
              </li>
                
              <li className="nav-item">
                  <Link className="nav-link invisible" to="/admin">Admin</Link>
              </li>
            </ul>
          </div>
          <Link to='/signin' >
              <button type="button" className="btn btn-success position-relative">
                Sign In
                
              </button>
            </Link>
            
        </div>
      </nav> */}
      </div>
     );
}
 
export default Header;