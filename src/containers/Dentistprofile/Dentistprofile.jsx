import React from 'react';
import Boton from '../../components/Boton/Boton';
import Footbar from '../../components/Footbar/Footbar';
import Navbar from '../../components/Navbar/Navbar';

const Dentistprofile = () => {
    return (
        <div>
            <Navbar></Navbar>
        <div>
            <Boton destino="Appointments" path="/appointment"/>
        </div>
            <Footbar></Footbar>
        </div>
    )
}

export default Dentistprofile
