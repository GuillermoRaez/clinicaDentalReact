import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import "./Dentistlogin.css";
import axios from 'axios';


const Dentistlogin = () => {

    let history = useHistory();

   //Hooks
   const [credentials, setCredentials] = useState({email:'',password:''});
   const [msgError, setMensajeError] = useState('');

   //Handlers
   const updateCredentials = (e) => {
       setCredentials({...credentials,[e.target.name]: e.target.value})
   }

   const logMe = async () => {

        let body = {
            email: credentials.email,
            password: credentials.password,
        }

        let res = await axios.post('http://localhost:3005/dentist/login', body);

        let token = res.data.token;
        let dentist = res.data.dentist;

        if(token !== ""){
            localStorage.setItem("token", token);
            localStorage.setItem("dentist", JSON.stringify(dentist));

            setTimeout(()=> {
            
                history.push("/dentistprofile");
    
            }, 750);
        }if(token === ""){
            console.log("He entrado")
            setMensajeError("Las credenciales no son correctas!")
        }
    }
    return (
        <div className="vistaLogin">
            <pre>{JSON.stringify(credentials, null,2)}</pre>
            <div className="loginCard">
                <input  type='email' name='email' title='email' onChange={updateCredentials} length='30'/>
                <input  type='password'  name='password' title='password' onChange={updateCredentials} length='30'/>
                <div className="sendButton" onClick={()=>logMe()}>Login</div>
                <div>{msgError}</div>
            </div>
        </div>
    )
}


export default Dentistlogin; 
