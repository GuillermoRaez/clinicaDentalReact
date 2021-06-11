import React, {useState} from 'react';
import "./Dentistregister.css";


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

    const ejecutaRegistro = () => {
        
        console.log("me has pulsado");
    }

    return (
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
    )
}

export default Dentistregister
