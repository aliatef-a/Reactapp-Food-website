import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './nav.css';
import logo from './../../imges/logo.png'

function Navs() {
    return (
        <>
            <Navbar expand="lg" className="">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} title='logo' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#pride">About Us</Nav.Link>
                            <Nav.Link href="#Explor">Explor Food</Nav.Link>
                            <Nav.Link href="#qts">FAQ</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navs
