import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import "./Login.css";
import axios from 'axios';


const Login = () => {

    let history = useHistory();

   //Hooks
   const [credentials, setCredentials] = useState({email:'',password:''});
   const [msgError, setMensajeError] = useState('');

   //Handlers
   const updateCredentials = (e) => {
       setCredentials({...credentials,[e.target.name]: e.target.value})
   }

   const logMe = async () => {
    
    let isDentist = true;

        let body = {
            email: credentials.email,
            password: credentials.password,
        }

        if(isDentist){
            console.log(isDentist)
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
            setMensajeError("Las credenciales no son correctas!")
            console.log("Hola")
        }
        }else{
            let res = await axios.post('http://localhost:3005/user/login', body);

            let token = res.data.token;
            let user = res.data.user;

            if(token !== ""){
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
    
                setTimeout(()=> {
                
                    history.push("/userprofile");
        
                }, 750);
            }if(token === ""){
                setMensajeError("Las credenciales no son correctas!")
                console.log("Hola")
            }
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

export default Login;
