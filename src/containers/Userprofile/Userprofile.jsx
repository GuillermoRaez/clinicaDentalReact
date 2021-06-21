import React from 'react'
import Boton from '../../components/Boton/Boton'
import Datauser from '../../components/Datauser/Datauser'
import Footbar from '../../components/Footbar/Footbar'
import Navbar from '../../components/Navbar/Navbar'
import "./Userprofile.css"


const Userprofile = () => {
    return (
    <div>
        <Navbar></Navbar>
        <div className="main">
            <div className="userCard">
                <Datauser/>
            </div>
            <div className="userMain">
                <div className="userAction">
                   <Boton destino="My Appointments" path="/myappointments"/>
                </div>
            </div>
        </div>
        <Footbar></Footbar>    
    </div>
    )
}

export default Userprofile;

