import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.css'

const navigationitems = (props) => (
    <ul 
     className={classes.NavigationItems}> 
        <NavigationItem link="/" active>Buger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationitems;