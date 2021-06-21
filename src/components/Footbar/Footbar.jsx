import React from 'react';
import "./Footbar.css";
import {NavLink} from 'react-router-dom';

const Footbar = () => {
    return (
        <div className="foot">
            <NavLink style={{ color: 'inherit', textDecoration: 'inherit'}} to="/about">About</NavLink>
            <NavLink style={{ color: 'inherit', textDecoration: 'inherit'}} to="/about">Contact</NavLink>
            <NavLink style={{ color: 'inherit', textDecoration: 'inherit'}} to="/about">Legal Terms and Use</NavLink>
            <NavLink style={{ color: 'inherit', textDecoration: 'inherit'}} to="/about">Cookie Settings</NavLink>
        </div>
    )
}

export default Footbar;
