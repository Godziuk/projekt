import React from 'react';

const Button = ({ children, href, onClick }) => (
    <button className="button" href="/login" onClick={onClick}>
        { children }
    </button>
);

export default Button;