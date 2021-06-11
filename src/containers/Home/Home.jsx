import React from 'react';
import Boton from '../../components/Boton/Boton';

import "./Home.css";


const Home = () => {
    return (
        <div className="vistaHome">
            <Boton destino="Userlogin" path="/userlogin"/>
            <Boton destino="Dentistlogin" path="/dentistlogin"/>
            <Boton destino="Userregister" path="/userregister"/>
            <Boton destino="Dentistregister" path="/dentistregister"/>
        </div>
    )
}

export default Home;
