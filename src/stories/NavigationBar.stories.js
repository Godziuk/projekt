import React from 'react';
import NavigationBar from '../components/NavigationBar';
import SideBar from '../components/SideBar';
import { Navbar, Nav } from 'react-bootstrap'
import Button from '../components/Button'


export default {
    title: 'NavigationBar',
    component: NavigationBar,
    subcomponents: { SideBar },
    
}

export const Navigation = () => 
<NavigationBar>
        <Navbar.Brand href="/">webflow</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/showcase">Showcase</Nav.Link>
            <Nav.Link href="/designers">Designers</Nav.Link>
            <Nav.Link href="/support">Learn & Support</Nav.Link>
            </Nav>
            <Nav>
                <Button variant='login'>Log In</Button>
                <Button variant='signup'>Sign Up for Free</Button>
            </Nav>
        </Navbar.Collapse>
</NavigationBar>


export const Side = () => 
<NavigationBar>
    <Navbar.Brand href="/">Explore the Showcase</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/showcase">Popular</Nav.Link>
            <Nav.Link href="/designers">Reccent</Nav.Link>
            <Nav.Link href="/support">Clonable</Nav.Link>
            </Nav>
    </Navbar.Collapse>
</NavigationBar>

