import React from 'react';
import './Datauser.css';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import ProfilePic from '../../img/users/Joséluis.jpeg';
// import PhotoProfile from '../../images/defaultFoto2.png';
// import moment from 'moment';

const Datauser = (props) => {

    useEffect(()=>{
        console.log(props.credentials);
    },)

    return (
            <div className="UserDataCard">
                <div className="PhotoCard">
                <img id="foto" src={ProfilePic} alt="Pphoto" height= "150" width="150"/>
                </div>
                <div className="InfoCard">
                <input className="inputUser" readOnly type="text" name="firstname"  placeholder={props.credentials?.user.firstname} size="34" lenght='30'></input>
                <input className="inputUser" readOnly type="text" name="lastname"  placeholder={props.credentials?.user.lastname} size="34" lenght='30' ></input>
                <input className="inputUser" readOnly type="text" name="email"  placeholder={props.credentials?.user.email} size="34" lenght='30'></input>
                <input className="inputUser" readOnly type="password" name="password"  placeholder="************" size="34" lenght='8'></input>
                <input className="inputUser" readOnly type="text" name="address"  placeholder={props.credentials?.user.address} size="34" lenght='30'></input>
                <input className="inputUser" readOnly type="text" name="phone"  placeholder={props.credentials?.user.phone} size="34" lenght='9'></input>
                <input className="inputUser" readOnly type="text" name="birthday" placeholder={props.credentials?.user.birthday} size="34" ></input>
                </div>
            </div>
    )
}

export default connect((state)=>({
    credentials:state.credentials,
}))(Datauser);