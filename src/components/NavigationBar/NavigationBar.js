import React from 'react';
import { Navbar } from 'react-bootstrap';

const NavigationBar = ({ children, ...rest }) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" {...rest}>
            { children }
        </Navbar>
    )
}

export default NavigationBar;