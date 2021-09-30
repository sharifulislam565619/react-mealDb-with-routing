import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (

        <Navbar bg="dark" variant="dark">
            <Container>

                <Nav className="m-auto mb-0">
                    <Link className="navLink" to="/home">Home</Link>
                    <Link className="navLink" to="/about">About</Link>
                    <Link className="navLink" to="/contact">Contact</Link>

                </Nav>
            </Container>
        </Navbar>



    );
};

export default Header;