import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Appointments = () => {

    const [citas,setCitas] = useState([]);

    let history = useHistory();

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
        return (<div>
            {citas.map((appointment, index) => (

                <div className="card" key={index}>
                    <p>{appointment.usuario}</p>
                    <p>{appointment.doctor}</p>
                    <p>{appointment.treatment}</p>
                    <p>{appointment.price}</p>
                </div>

            ))}
        </div>)
    } else {
        return (

            <div>Soy Profile</div>
        )
    }

}

export default Appointments
