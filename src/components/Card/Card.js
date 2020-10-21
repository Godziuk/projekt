import React from 'react';
import { Card } from 'react-bootstrap'
const Card = ({ children, ...rest }) => {
    return(
        <Card style={{ width: '18rem' }}>
                { children }
        </Card>
    )
}