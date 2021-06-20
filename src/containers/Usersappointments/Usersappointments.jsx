import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import Footbar from '../../components/Footbar/Footbar';
import {connect} from 'react-redux';
import "./Userappointments.css"

const Usersappointments = (props) => {

    const [citas,setCitas] = useState([]);

    useEffect(() => {

        getCitas();
    }, [])

    useEffect(() => {

    })

    const getCitas = async () => {

        try {
            console.log("esto es el id user",props.userData.idUser)
            console.log("esto es el id user",props.userData.user._id)
            // let userid = localStorage.getItem("usuario")
            let body = {"usuario": props.userData.user._id}

            // let token = localStorage.getItem("token");
            let res = await axios.post('http://localhost:3005/appointment/myappointments', body, {
                headers: {
                    'Authorization': `token ${props.userData.token}`
                }
            })
            setCitas(res.data);
            console.log(res.data);

        } catch (err) {
            console.log({ message: err.message });
        }
    }

    if (citas[0]?._id) {
        return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className="VistaCitas">
            {citas.map((appointment, index) => (

                <div className="card" key={index}>
                    <p>Date: {appointment.appointmentDate}</p>
                    <p>Dentist: {appointment.dentist}</p>

                    <p>Treatment: {appointment.treatment}</p>
                    <p>Price: {appointment.price}</p>
                </div>

            ))}
            </div>
            <div>
                <Footbar/>
            </div>
        </div>)
    } else {
        return (
            <div>
                <Navbar></Navbar>
            <div>Soy Profile</div>
                <Footbar></Footbar>
            </div>
        )
    }
}

export default connect((state)=>(
    {userData:state.credentials}
))(Usersappointments);