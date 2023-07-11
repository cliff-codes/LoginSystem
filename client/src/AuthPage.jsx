import React from 'react'
import { useState } from 'react'

const AuthPage = () => {
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
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
                <button>Register</button>
            </div>

            <div style={{
                display: "flex",
                gap: "2px"
            }}>
                <div><label>Email</label></div>
                <div><input type='email' onChange={(e) => setLoginEmail(e.target.value)} /></div>
                <div><label>Password</label></div>
                <div><input type='password' onChange={(e) => setLoginPassword(e.target.value)}/></div>
                <button>Login</button>
            </div>
            <div>
                <button>Get User</button>
            </div>
        </section>
        </div>
    </div>
  )
}

export default AuthPage