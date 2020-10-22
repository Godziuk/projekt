import React from 'react';
import { Navbar } from 'react-bootstrap';

const NavigationBar = ({ children, ...rest }) => {
    return (
        <Navbar {...rest}>
            { children }
        </Navbar>
    )
}

export default NavigationBar;