import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const AuthPage = () => {
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    
    const google = () => {
        window.open('http://localhost:3001/auth/google', '_self')
    }

    const register = () => {

        axios({
            method: "post",
            data: {
                userEmail: registerEmail,
                userPassword: registerPassword
            },
            url: "http://localhost:3001/register",
            withCredentials: true
        }).then(res => console.log(res))
    }

    const login = () => {
        axios({
            method: "post",
            data: {
                userEmail: loginEmail,
                userPassword: loginPassword
            },
            url: "http://localhost:3001/login",
            withCredentials: true
        }).then(res => console.log(res))
    }

    const getUser = () => {
        axios({
            method: "get",
            url: "http://localhost:3001/user",
            withCredentials: true
        }).then(res => console.log(res))
    }

  return (
    <div style={{
        width: "100%"
    }}>
        <div>
        <section>Auth Page</section>
        <section style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
            }}>
            <div style={{
                display: "flex",
                gap: "2px"
            }}>
                <div><label>Email</label></div>
                <div><input type='email' onChange={(e) => setRegisterEmail(e.target.value)}/></div>
                <div><label>Password</label></div>
                <div><input type='password'  onChange={(e) => setRegisterPassword(e.target.value)}/></div>
                <button onClick={register}>Register</button>
            </div>

            <div style={{
                display: "flex",
                gap: "2px"
            }}>
                <div><label>Email</label></div>
                <div><input type='email' onChange={(e) => setLoginEmail(e.target.value)} /></div>
                <div><label>Password</label></div>
                <div><input type='password' onChange={(e) => setLoginPassword(e.target.value)}/></div>
                <button onClick={login}>Login</button>
            </div>
            <div>
                <button>Get User</button>
            </div>

            <div>
                <button onClick={google}>Login with Google</button>
            </div>
        </section>
        </div>
    </div>
  )
}

export default AuthPage