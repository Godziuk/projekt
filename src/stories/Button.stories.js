import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

export default {
  title: 'Button',
  components: Button,
};

export const LogIn = () => <Button onClick={action('clicked')}>Log In</Button>


export const SignUp = () => <Button onClick={action('clicked')}>Sign Up for Free</Button>