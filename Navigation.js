// Importing React
import React from "react";
import logo from '../Starbucks_Corporation_Logo_2011.svg.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoLocationSharp } from "react-icons/io5";

// Creating Navigation component
function Navigation() {
    return(
        <header>
                {/* Collapsible Navigation for screens of 992px or wider */}
                <Navbar expand="md">
                    <Container fluid>
                            <Navbar.Brand href="#">
                                <img src={logo} className="logo" alt="logo" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto uppercase">
                                    <Nav.Link href="#ourCoffees">Our Coffees</Nav.Link>
                                    <Nav.Link href="#deliver">Deliver</Nav.Link>
                                    <Nav.Link href="#rewards">Rewards</Nav.Link>
                                </Nav>
                                <Nav className="ms-auto nav-right">
                                    <Nav.Link href="#findAStore" id="findStoreLink">
                                        <IoLocationSharp id="location-pin" />
                                        Find a store
                                    </Nav.Link>
                                    <Nav.Link href="#signIn" id="sign-in-button">Sign in</Nav.Link>
                                    <Nav.Link href="#joinNow" id="join-now-button">Join now</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                    </Container>
                </Navbar>
        </header>
        
    );
}

export default Navigation;