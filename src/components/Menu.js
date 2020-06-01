import React from 'react'
import { Navbar, Nav, Form, FormControl, Button, Container, NavDropdown } from 'react-bootstrap'
import logo from './../logo.png'
import "bootstrap/dist/css/bootstrap.min.css";




export default function Menu() {
    return (
        <div className="navbar">


            <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        alt=""
                        width="120"
                        height="100"
                        className="d-inline-block align-top"
                    />

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link >Home</Nav.Link>
                        <Nav.Link >About Us</Nav.Link>
                    </Nav>
                    <div class="searchbox">
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />

                            <Button variant="outline-secondary">Search</Button>{' '}

                        </Form>
                    </div>

                </Navbar.Collapse>
            </Navbar>


        </div >
    )
}
