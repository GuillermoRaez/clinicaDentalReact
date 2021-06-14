import React from 'react';
import "./Navbar.css";
import {NavLink} from 'react-router-dom';
import Logo from "../../img/Dr_cow_logo.png";

const Navbar = () => {
    return (
        <>
          <div className="nav">
            <div className="logo">
              <NavLink to="/"><img className="img"  src={Logo} alt=""/></NavLink> 
            </div>
           <div className="space"></div>
            <div className="NavMenu">
              <div className="NavLink">
                <NavLink style={{ color: 'inherit', textDecoration: 'inherit'}} to="/register">Register</NavLink>
              </div>
              <div className="NavLink" activeClassName="selected">
                <NavLink style={{ color: 'inherit', textDecoration: 'inherit'}} to="/login">Login</NavLink>
              </div>
            </div>  
          </div>
        </>
      );
    };
    export default Navbar;
