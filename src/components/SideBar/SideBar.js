import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const SideBar = ({ children, ...rest }) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Explore the Showcase</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/showcase">Popular</Nav.Link>
            <Nav.Link href="/designers">Recent</Nav.Link>
            <Nav.Link href="/support">Clonable</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default SideBar;