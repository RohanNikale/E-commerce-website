import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate()

    useEffect(() => {

        let b = Cookies.get('token')
        if (b !== undefined) {
            navigate('/profile')
        }
    })
    const [signupState, setSignup] = useState({ name: '', email: '', phone: '', password: '', cpassword: '' })

    let handdleForm = (e) => {
        setSignup({ ...signupState, [e.target.name]: e.target.value })

    }

    let signUp = async (e) => {
        e.preventDefault();

        // Using Fetch API
        const res = await fetch('http://localhost:8000/signup', {
            method: 'POST',
            body: JSON.stringify({
                signupState
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        let token = await res.json()

        Cookies.set('token', token)
        navigate('/')

    }
    return (
        <div>
            <form onSubmit={signUp} method="post">

                <div className="login">
                    <div className="inputs">
                        <h1>Sign up</h1>
                        <label htmlFor="">Name</label><input type="text" required name="name" value={signupState.name} onChange={handdleForm} id="" />
                        <label htmlFor="">Email</label><input type="text" required name="email" value={signupState.email} onChange={handdleForm} id="" />
                        <label htmlFor="">Phone</label><input type="number" required name="phone" value={signupState.phone} onChange={handdleForm} id="" />
                        <label htmlFor="">Password</label><input type="password" required name="password" value={signupState.password} onChange={handdleForm} id="" />
                        <label htmlFor="">Confirm Password</label><input type="password" required name="cpassword" value={signupState.cpassword} onChange={handdleForm} id="" />
                        <input type="submit" value="Signup" />
                    </div>
                </div>
            </form>
        </div>
    )
}
