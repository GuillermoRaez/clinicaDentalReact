import React from 'react';
import './Userdata.css';
// import PhotoProfile from '../../images/defaultFoto.png';
// import PhotoProfile from '../../images/defaultFoto2.png';
// import moment from 'moment';

const Userdata = () => {
    let user={}
    user = JSON.parse(localStorage.getItem('dataUser'));
    console.log=(user);


    return (
        <div>
                <h1>DATOS DEL USUARIO</h1>
            <div className="boxDataUser">
                
                <div className="infoUser1">
                    <div className="fotoUser"><img id="foto" src={PhotoProfile} alt="Profile photo" height= "100" width="100" /></div>
                    <div className="empty"></div>
                                            
                </div>

                <div className="infoUser2">
                    <input className="inputUser" type="text" name="firstname"  placeholder={user.name} size="34" lenght='30'></input>
                    <input className="inputUser" type="text" name="lastname"  placeholder={user.lastName1} size="34" lenght='30' ></input>
                    <input className="inputUser" type="text" name="email"  placeholder={user.email} size="34" lenght='30'></input>
                    <input className="inputUser" type="password" name="password"  placeholder="************" size="34" lenght='8'></input>

                </div>



                <div className="infoUser3">
                    <input className="inputUser" type="text" name="address"  placeholder={user.address} size="34" lenght='30'></input>
                    <input className="inputUser" type="text" name="phone"  placeholder={user.telephone} size="34" lenght='9'></input>
                    <input className="inputUser" type="text" name="birthday" placeholder={moment(user.birthday).format('L')} ></input>
                </div>
                    

            </div>
            
        </div>
    )
}

export default Userdata;