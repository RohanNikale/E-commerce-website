import React,{useEffect,useState} from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";
export default function Login() {
    const [loginFormState, setLoginForm] = useState({email: '', password: ''})
    const [Errormessage,setError]=useState('')
    const navigate = useNavigate()
    
    let b = Cookies.get('token')
    if (b !== undefined) {
        navigate('/')
    }
    useEffect(() => {
        
        let b = Cookies.get('token')
        if (b !== undefined) {
            navigate('/')
        }
    })


    let handdleForm = (e) => {
        setLoginForm({ ...loginFormState, [e.target.name]: e.target.value })

    }

    let login = async(e) => {
        e.preventDefault();

        // Using Fetch API
       const res =await fetch('http://localhost:8000/login', {
            method: 'POST',
            body: JSON.stringify({
                loginFormState
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        try{

            let token =await res.json()
            Cookies.set('token',token)
            navigate('/')
        }catch{
            setError('Invalid credatial')
        }

    
    }
    return (
        <div>
            
            <form onSubmit={login} action="" method="post">

                <div className="login">
                    <div className="inputs">
                        <h1>Login</h1>
                        <p style={{color:'red',fontweight:"899"}}>{Errormessage}</p>
                        <label htmlFor="">Email</label><input type="text"required name="email" onChange={handdleForm} value={loginFormState.email} />
                        <label htmlFor="">Password</label><input type="password"required name="password" onChange={handdleForm} value={loginFormState.password} />
                        <input type="submit" value="Login" />
                    </div>
                </div>
            </form>
        </div>
    )
}
