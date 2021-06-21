import React from 'react';
import Boton from '../../components/Boton/Boton';
import Footbar from '../../components/Footbar/Footbar';
import Navbar from '../../components/Navbar/Navbar';
import "./Register.css";


const Register = () => {
    return (<div>
        <div>
            <Navbar></Navbar>
        </div>
        <div className="main">
            <div className="botonContainer">
                <div className="botonMenu">
                    <Boton destino="User" path="/userregister"/>
                </div>
                <div className="botonMenu">
                    <Boton destino="Dentist" path="/dentistregister"/>
                </div>
            </div>
        </div>
        <div>
            <Footbar></Footbar>
        </div>
        </div>
    )
}

export default Register;
