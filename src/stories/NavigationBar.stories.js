import React from 'react';
import { action } from '@storybook/addon-actions';
import NavigationBar from '../components/NavigationBar';


export default {
    title: 'NavigationBar',
    components: NavigationBar,
}

export const Menu = () => <NavigationBar onClick={action('clicked')}/>