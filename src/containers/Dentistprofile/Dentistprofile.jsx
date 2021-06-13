import React from 'react';
import Boton from '../../components/Boton/Boton';
import Footbar from '../../components/Footbar/Footbar';
import Navbar from '../../components/Navbar/Navbar';

const Dentistprofile = () => {
    return (
        <div>
        <Navbar></Navbar>
        <div className="main">
            <div className="userCard"></div>
            <div className="userMain">
                <div className="userAction">
                   <Boton destino="New Dentists" path="/hire"/>
                </div>
                <div className="userAction">
                    <Boton destino="Appointments" path="/appointments"/>
                </div>
            </div>
        </div>
        <Footbar></Footbar>    
    </div>
    )
}

export default Dentistprofile
