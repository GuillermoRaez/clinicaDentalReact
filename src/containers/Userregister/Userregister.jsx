import axios from 'axios';
import React, {useState} from 'react';
import "./Userregister.css";
import {useHistory} from "react-router";


const Userregister = () => {

    //Hooks
    const [datosUser, setDatosUser] = useState(
        {
        firstname:'',
        lastname:'',
        birthday:'',
        phone: '',
        email: '',
        password: '',
        address: ''
    });


    //Handlers (manejadores)

    const updateFormulario = (e) => {
        setDatosUser({...datosUser, [e.target.name]: e.target.value});
    }

    //Funciones 

    const ejecutaRegistro = async () => {
        
        let user = {
            firstname: datosUser.firstname,
            lastname: datosUser.lastname,
            birthday: datosUser.birthday,
            phone: datosUser.phone,
            email: datosUser.email,
            password: datosUser.password,
            address: datosUser.address,
        }

        await axios.post(("http://localhost:3005/user"), user)        
        .then(res => {console.log("Usuario registrado!")
        }).catch(error => {
            console.log(error)
        });         

    }

    return (
        <div className="formulario">

            <input className="inputBase" type="text" name="firstname" 
            onChange={updateFormulario} placeholder="firstname"></input>

            <input className="inputBase" type="text" name="lastname" 
            onChange={updateFormulario} placeholder="lastname"></input>

            <input className="inputBase" type="date" name="birthday" 
            onChange={updateFormulario} placeholder="birthday"></input>

            <input className="inputBase" type="text" name="phone" 
            onChange={updateFormulario} placeholder="Phone"></input>

            <input className="inputBase" type="email" name="email" 
            onChange={updateFormulario} placeholder="Email"></input>

            <input className="inputBase" type="password" name="password" 
            onChange={updateFormulario} placeholder="Password"></input>

            <input className="inputBase" type="text" name="address" 
            onChange={updateFormulario} placeholder="address"></input>

            <div className="botonCuco" onClick={()=>ejecutaRegistro()}>Enviar</div>
        </div>
    )
}

export default Userregister
