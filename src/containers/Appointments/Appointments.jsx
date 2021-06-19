import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import Footbar from '../../components/Footbar/Footbar';

const Appointments = () => {

    const [citas,setCitas] = useState([]);

    useEffect(() => {

        getCitas();
    }, [])

    useEffect(() => {

    })

    const getCitas = async () => {

        try {
            let token = localStorage.getItem("token");
            let res = await axios.get('http://localhost:3005/appointment', {
                headers: {
                    'Authorization': `token ${token}`
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
                <Navbar></Navbar>
            </div>
            <div className="main">
            {citas.map((appointment, index) => (

                <div className="card" key={index}>
                    <p>{appointment.usuario}</p>
                    <p>{appointment.doctor}</p>
                    <p>{appointment.treatment}</p>
                    <p>{appointment.price}</p>
                </div>

            ))}
            </div>
            <div>
                <Footbar></Footbar>
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

export default Appointments
