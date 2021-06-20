import React from 'react';
import "./Navbar.css";
import {NavLink} from 'react-router-dom';
import Logo from "../../img/Dr_cow_logo.png";
import { LOGOUT } from '../../redux/types'
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

const Navbar = (props) => {

  let history = useHistory();


  // const takeMe = (where) => {
  //   history.push(where);
  // }

  const logOut = () => {
    props.dispatch({ type: LOGOUT });

    setTimeout(() => {
      history.push('/');
    }, 500)

  }

  if (props.credentials?.token === '') {
    return (
      <div className="nav">
        <div className="logo">
          <NavLink to="/"><img className="img" src={Logo} alt="logo"/></NavLink>
        </div>
        <div className="space"></div>
        <div className="NavMenu" >
          <div className="NavLink">
            <NavLink style={{ color: 'inherit', textDecoration: 'inherit'}} to="/register">Register</NavLink>
          </div>
          <div className="NavLink">
          <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} to="/login">Login</NavLink>
          </div>
        </div>
      </div>
    )

  } else {
    return (
      <div className="nav">
        <div className="logo">
          <NavLink to="/"><img className="img" src={Logo} alt="logo"/></NavLink>
        </div>
        <div className="space"></div>
        <div className="NavMenu">
            <div className="NavLink">
              <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }} onClick={()=>logOut()} to="/">Logout</NavLink>
            </div>
        </div>
      </div>
        )
}


};


    export default connect((state)=>({credentials:state.credentials}))(Navbar);
