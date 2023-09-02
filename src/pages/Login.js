import React, { useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";

import { useAuth } from '../AuthContext';


export default function Login() {
    let API_URL = 'http://localhost:8000/user'
    const { login } = useAuth();
  

    const [loginFormState, setLoginForm] = useState({ email: '', password: '' })
    const [Errormessage, setError] = useState('')
    const navigate = useNavigate()


    let handdleForm = (e) => {
        setLoginForm({ ...loginFormState, [e.target.name]: e.target.value })

    }

    let LogIn = async (e) => {
        e.preventDefault();
        console.log(loginFormState)
        // Using Fetch API
        const res = await fetch(`${API_URL}/login`, {
            method: 'POST',
            body: JSON.stringify(loginFormState),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        try {

            let response = await res.json()
            console.log(response.token)
            if (!response.success) {
                setError('Invalid credatial')

            }
            else {
                Cookies.set('token', response.token)
                login()
                navigate('/')
            }
        } catch (error) {
            setError('Invalid credatial')
        }


    }
    return (
        <div>

            <form onSubmit={LogIn} action="" method="post">

                <div className="login">
                    <div className="inputs">
                        <h1>Login</h1>
                        <p style={{ color: 'red', fontweight: "899" }}>{Errormessage}</p>
                        <label htmlFor="">Email</label><input type="text" required name="email" onChange={handdleForm} value={loginFormState.email} />
                        <label htmlFor="">Password</label><input type="password" required name="password" onChange={handdleForm} value={loginFormState.password} />
                        <input type="submit" value="Login" />
                    </div>
                </div>
            </form>
        </div>
    )
}
