import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import "./Login.css";
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import Footbar from '../../components/Footbar/Footbar';
import {connect} from 'react-redux';
import {LOGIN} from '../../redux/types'

const Login = (props) => {

    let history = useHistory();

   //Hooks
   const [credentials, setCredentials] = useState({email:'',password:''});
   const [msgError, setMensajeError] = useState('');

   //Handlers
   const updateCredentials = (e) => {
       setCredentials({...credentials,[e.target.name]: e.target.value})
   }

   const logMe = async () => {
    
    //Find why the if statement is not working - if true (dentistendpoint), if false (userendpoint)

    if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(credentials.email) ) {
        setMensajeError('Please introduce a valid email.');
        return;
   }

        let body = {
            email: credentials.email,
            password: credentials.password,
        }

        if(document.getElementById("opciones").value === "user"){
        
            try {let res = await axios.post('http://localhost:3005/user/login', body);

            let data = { 
            token: res.data.token,
            user: res.data.user,
            idUser: res.data.user._id
            }

            //Redux
            props.dispatch({type:LOGIN,payload:data});

            setTimeout(()=> {
            
                history.push("/userprofile");
    
            }, 750);
        } catch (err) {
            setMensajeError("Credentials are not correct!")
        }

        }else{
        
            try {let res = await axios.post('http://localhost:3005/dentist/login', body);

            let data = {
                token: res.data.token,
                dentist: res.data.dentist,
                idDentist: res.data.dentist._id
            }

            //Redux
            props.dispatch({type:LOGIN,payload:data});
    
            setTimeout(()=> {
                
                history.push("/dentistprofile");
        
            }, 750);

            }catch (err) {
                setMensajeError("Credentials are not correct!")
            }
        }
    }

    return (
    <div>
        <Navbar></Navbar>
    <div className="main">
        <div className="vistaLogin">
            <div className="loginCard">
                <input className="inputBase"  type='email' name='email' title='email' placeholder="Email" onChange={updateCredentials} length='30'/>
                <input className="inputBase"  type='password'  name='password' title='password' placeholder="Password" onChange={updateCredentials} length='30'/>
                <select id = "opciones" className="input">
                        <option value="user">User</option>
                        <option value="dentist">Dentist</option>
                    </select>
                <div className="sendButton" onClick={()=>logMe()}>Login</div>
                <div>{msgError}</div>
            </div>
        </div>
    </div>
    <Footbar></Footbar>
    </div>
    )
}

export default connect()(Login);
