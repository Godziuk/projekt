import React from 'react';
import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
};

export const LogIn = () => <Button variant='login'>Log In</Button>

export const SignUp = () => <Button variant='signup'>Sign Up for Free</Button>