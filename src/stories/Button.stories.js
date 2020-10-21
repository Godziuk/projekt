import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
};

export const LogIn = () => <Button href="/login" onClick={action('Log in')}>Log In</Button>


export const SignUp = () => <Button href="/signup" onClick={action('Sign up')}>Sign Up for Free</Button>