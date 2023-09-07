import React, { useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate,Link } from "react-router-dom";
import { useAuth } from '../AuthContext';

export default function Login() {
    const navigate = useNavigate()
    const { login,API_URL } = useAuth();
    const [Errormessage, setError] = useState('')

    const [signupState, setSignup] = useState({ name: '', email: '', phone: '', password: '', cpassword: '' })

    let handdleForm = (e) => {
        setSignup({ ...signupState, [e.target.name]: e.target.value })

    }

    let signUp = async (e) => {
        e.preventDefault();
    
        // Using Fetch API
        const res = await fetch(`${API_URL}/user/signup`, {
            method: 'POST',
            body: JSON.stringify(signupState),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
    
        try {
            let response = await res.json();
            if (!response.success) {
                setError('Registration failed');
            } else {
                Cookies.set('token', response.token);
                login()
                navigate('/');
            }
        } catch (error) {
            setError('Registration failed');
        }
    };
    
    return (
        <div>
            <form onSubmit={signUp} method="post">

                <div className="login">
                    <div className="inputs">
                        <h1>Sign up</h1>
                        <p style={{ color: 'red', fontweight: "899" }}>{Errormessage}</p>

                        <label htmlFor="">Name</label><input type="text" required name="name" value={signupState.name} onChange={handdleForm} id="" />
                        <label htmlFor="">Email</label><input type="email" required name="email" value={signupState.email} onChange={handdleForm} id="" />
                        <label htmlFor="">Phone</label><input type="number" required name="phone" value={signupState.phone} onChange={handdleForm} id="" />
                        <label htmlFor="">Password</label><input type="password" required name="password" value={signupState.password} onChange={handdleForm} id="" />
                        <label htmlFor="">Confirm Password</label><input type="password" required name="cpassword" value={signupState.cpassword} onChange={handdleForm} id="" />
                        <input type="submit" value="Signup" />
                        <b style={{textAlign:'center',marginTop:'10px'}}>
                        Already ave an accoun? <Link to='/login' style={{color:'#2176ff'}}>Sign in</Link>
                            </b>
                    </div>
                </div>
            </form>
        </div>
    )
}
