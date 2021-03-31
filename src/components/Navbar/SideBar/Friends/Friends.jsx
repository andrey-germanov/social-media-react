import React from 'react';
import { NavLink } from 'react-router-dom';

const Friends = (props) => {
    return (
        <NavLink to="" ><img src={props.image}/>{props.name}</NavLink> 
    )
}


export default Friends;