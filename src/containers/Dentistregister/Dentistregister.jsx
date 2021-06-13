import React, {useState} from 'react';
import "./Dentistregister.css";
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import Footbar from '../../components/Footbar/Footbar';



const Dentistregister = () => {

    //Hooks
    const [datosDentist, setDatosDentist] = useState(
        {
        firstname:'',
        lastname:'',
        email: '',
        password: '',
        specialty: ''
    });


    //Handlers (manejadores)

    const updateFormulario = (e) => {
        setDatosDentist({...datosDentist, [e.target.name]: e.target.value});
    }

    //Funciones 

    const ejecutaRegistro = async () => {
        
        let dentist = {
            firstname: datosDentist.firstname,
            lastname: datosDentist.lastname,
            email: datosDentist.email,
            password: datosDentist.password,
            specialty: datosDentist.specialty,
        }

        axios.post(("http://localhost:3005/dentist/hire"), dentist)
        .then(res => {console.log("Dentista registrado!")
        }).catch(error => {
            console.log(error)
        });         
    }

    return (
        <div>
            <Navbar></Navbar>
        <div className="formulario">

            <input className="inputBase" type="text" name="firstname" 
            onChange={updateFormulario} placeholder="firstname"></input>

            <input className="inputBase" type="text" name="lastname" 
            onChange={updateFormulario} placeholder="lastname"></input>

            <input className="inputBase" type="email" name="email" 
            onChange={updateFormulario} placeholder="Email"></input>

            <input className="inputBase" type="password" name="password" 
            onChange={updateFormulario} placeholder="Password"></input>

            <input className="inputBase" type="text" name="specialty" 
            onChange={updateFormulario} placeholder="specialty"></input>

            <div className="botonCuco" onClick={()=>ejecutaRegistro()}>Enviar</div>
        </div>
        <Footbar></Footbar>
    </div>
    )
}

export default Dentistregister
