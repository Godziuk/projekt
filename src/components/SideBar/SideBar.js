import React from 'react';
import { Navbar } from 'react-bootstrap';

const SideBar = ({ children, ...rest }) => {
    return (
        <Navbar {...rest}>
            { children }
        </Navbar>
    )
}

export default SideBar;