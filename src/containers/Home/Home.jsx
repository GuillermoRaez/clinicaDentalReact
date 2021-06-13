import React from 'react';
import Boton from '../../components/Boton/Boton';
import Footbar from '../../components/Footbar/Footbar';
import Navbar from '../../components/Navbar/Navbar';

import "./Home.css";


const Home = () => {
    return (
    <div>
        <Navbar></Navbar>
        <div className="vistaHome">
            <Boton destino="Userlogin" path="/userlogin"/>
            <Boton destino="Dentistlogin" path="/dentistlogin"/>
            <Boton destino="Userregister" path="/userregister"/>
            <Boton destino="Dentistregister" path="/dentistregister"/>
        </div>
        <Footbar></Footbar>
    </div>
    )
}

export default Home;
