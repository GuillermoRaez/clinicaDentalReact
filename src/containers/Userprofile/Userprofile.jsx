import React from 'react'
import Boton from '../../components/Boton/Boton'
import Footbar from '../../components/Footbar/Footbar'
import Navbar from '../../components/Navbar/Navbar'
import Appointments from '../Appointments/Appointments'
import "./Userprofile.css"

const Userprofile = () => {
    return (
    <div>
        <Navbar></Navbar>
        <div className="main">
            <div className="userCard"></div>
            <div className="userMain">
                <div className="userAction">
                   <Boton destino="New Appointments" path="/newappointments"/>
                </div>
                <div className="userAction">
                    <Boton destino="Dentists"path="/dentists"/>
                </div>
            </div>
        </div>
        <Footbar></Footbar>    
    </div>
    )
}

export default Userprofile

