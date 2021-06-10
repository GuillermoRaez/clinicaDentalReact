import React, {useState} from 'react';
import "./Register.css";


const Register = () => {

    //Hooks
    const [datosUser, setDatosUser] = useState(
        {
        nombre:'',
        email:'',
        password:'',
        phone: ''
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

            <input className="inputBase" type="text" name="nombre" 
            onChange={updateFormulario} placeholder="Nombre"></input>

            <input className="inputBase" type="text" name="email" 
            onChange={updateFormulario} placeholder="Email"></input>

            <input className="inputBase" type="password" name="password" 
            onChange={updateFormulario} placeholder="Password"></input>

            <input className="inputBase" type="text" name="phone" 
            onChange={updateFormulario} placeholder="Phone"></input>

            <div className="botonCuco" onClick={()=>ejecutaRegistro()}>Enviar</div>
        </div>
    )
}

export default Register;
