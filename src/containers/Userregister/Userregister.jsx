import axios from 'axios';
import React, {useState} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footbar from '../../components/Footbar/Footbar';
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
    <div>
        <Navbar></Navbar>
        <div className="main">
            <div className="formulario">
        
                <input className="inputBase" type="text" name="firstname" 
                onChange={updateFormulario} placeholder="Firstname"></input>
    
                <input className="inputBase" type="text" name="lastname" 
                onChange={updateFormulario} placeholder="Lastname"></input>
    
                <input className="inputBase" type="date" name="birthday" 
                onChange={updateFormulario} placeholder="Birthday"></input>
    
                <input className="inputBase" type="text" name="phone" 
                onChange={updateFormulario} placeholder="Phone"></input>
    
                <input className="inputBase" type="email" name="email" 
                onChange={updateFormulario} placeholder="Email"></input>
    
                <input className="inputBase" type="password" name="password" 
                onChange={updateFormulario} placeholder="Password"></input>
    
                <input className="inputBase" type="text" name="address" 
                onChange={updateFormulario} placeholder="Address"></input>
    
                <div className="botonCuco" onClick={()=>ejecutaRegistro()}>Enviar</div>
            </div>
        </div>
        <Footbar></Footbar>
    </div>
    )
}

export default Userregister;
