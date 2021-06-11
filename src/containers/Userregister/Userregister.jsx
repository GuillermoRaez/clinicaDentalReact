import React, {useState} from 'react';
import "./Userregister.css";


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

    const ejecutaRegistro = () => {
        
        console.log("me has pulsado");
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
