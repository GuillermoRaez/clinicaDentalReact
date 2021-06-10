import React, {useState, useEffect} from 'react';
import "./Login.css";


const Login = () => {

    //Hooks
    const [credentials, setCredentials] = useState({
        email:"",
        password:"",
    })

   const updateCredentials = (e) => {
       setCredentials({...credentials, [e.target.name]:e.target.value})
   }



    //

    return (
        <div>
            
        </div>
    )
}

export default Login
