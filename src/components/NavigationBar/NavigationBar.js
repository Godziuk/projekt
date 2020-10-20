import React from 'react';
import Button from '../Button'
import { Nav, Navbar } from 'react-bootstrap';

const NavigationBar = ({ children, ...rest }) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">webflow</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/showcase">Showcase</Nav.Link>
            <Nav.Link href="/designers">Designers</Nav.Link>
            <Nav.Link href="/support">Learn & Support</Nav.Link>
            </Nav>
            <Nav>
                <Button>Log In</Button>
                <Button>Sign Up for Free</Button>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar;