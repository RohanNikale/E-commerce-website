import React, { useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate,Link } from "react-router-dom";

import { useAuth } from '../AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const { login,API_URL } = useAuth();
  

    const [loginFormState, setLoginForm] = useState({ email: '', password: '' })
    const navigate = useNavigate()


    let handdleForm = (e) => {
        setLoginForm({ ...loginFormState, [e.target.name]: e.target.value })

    }
    
    let LogIn = async (e) => {
        e.preventDefault();
        // Using Fetch API
        const res = await fetch(`${API_URL}/user/login`, {
            method: 'POST',
            body: JSON.stringify(loginFormState),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        try {

            let response = await res.json()
            if (!response.success) {
                toast.error("Invalid credatil !", {
                    position: toast.POSITION.TOP_CENTER
                });
                
            }
            else {
                Cookies.set('token', response.token)
                toast.error("Login Succesfuly", {
                    position: toast.POSITION.TOP_CENTER
                });
                login()
                navigate('/')
            }
        } catch (error) {
            toast.error("Invalid credatil !", {
                position: toast.POSITION.TOP_CENTER
              });
        }
        
        
    }
    
    return (
        <div>
<ToastContainer />
            <form onSubmit={LogIn} action="" method="post">

                <div className="login">
                    <div className="inputs">
                        <h1>Login</h1>
                        <label htmlFor="">Email</label><input type="text" required name="email" onChange={handdleForm} value={loginFormState.email} />
                        <label htmlFor="">Password</label><input type="password" required name="password" onChange={handdleForm} value={loginFormState.password} />
                        <input type="submit" value="Login" />
                        
                        <b style={{textAlign:'center',marginTop:'10px'}}>
                           I don't have Account? <Link to='/signup' style={{color:'#2176ff'}}>Sign Up</Link>
                            </b>
                    </div>
                </div>
            </form>
        </div>
    )
}
