import React from 'react';
import './Datauser.css';
// import PhotoProfile from '../../images/defaultFoto.png';
// import PhotoProfile from '../../images/defaultFoto2.png';
// import moment from 'moment';

const Datauser = () => {
    let user={}
    user = JSON.parse(localStorage.getItem("UserData"));
    console.log=(user);


    return (
            <div className="boxUserData">
                    <input className="inputUser" type="text" name="firstname"  placeholder={user.firstname} size="34" lenght='30'></input>
                    <input className="inputUser" type="text" name="lastname"  placeholder={user.lastname} size="34" lenght='30' ></input>
                    <input className="inputUser" type="text" name="email"  placeholder={user.email} size="34" lenght='30'></input>
                    <input className="inputUser" type="password" name="password"  placeholder="************" size="34" lenght='8'></input>
                    <input className="inputUser" type="text" name="address"  placeholder={user.address} size="34" lenght='30'></input>
                    <input className="inputUser" type="text" name="phone"  placeholder={user.phone} size="34" lenght='9'></input>
                    <input className="inputUser" type="text" name="birthday" placeholder={user.birthday} ></input>
                </div>
    )
}

export default Datauser;