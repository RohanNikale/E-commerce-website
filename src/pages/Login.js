import React from 'react'

export default function Login() {
    return (
        <div>
            <form action="" method="post">

                <div className="login">
                    <div className="inputs">
                        <h1>Login</h1>
                        <label htmlFor="">Email</label><input type="text" required name="email" id="" />
                        <label htmlFor="">Password</label><input type="text" required name="name" id="" />
                        <input type="submit" value="Signup  " />
                    </div>
                </div>
            </form>
        </div>
    )
}
