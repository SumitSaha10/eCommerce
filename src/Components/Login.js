import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
const LogIn = () => {
    const [{ user }, dispatch] = useStateValue()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const login = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:6000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
        });

        const json = await response.json();
        if (json.success) {
            alert('You successfully logged in')
            navigate('/')
            // localStorage.setItem('auth', json.authToken)
            dispatch({
                type: 'SET_USER',
                user: email,

            })
            localStorage.setItem("set-email", email)
        }
        else {
            alert('Failed to logged in')
        }
    }


    return (
        <div className='login'>
            <i class="fa-solid fa-circle-user"></i>
            <div className='login__container'>
                <h1>Sign In</h1>
                <form>

                    <h5>Email</h5>
                    <input type='email' value={email} onChange={event => setEmail(event.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={event => setPassword(event.target.value)} />
                    <button type='submit' className='login__signInButton' onClick={login}>Sign In</button>

                </form>
                <p>By continuing, you agree to ecommerce's Conditions of Use and Privacy Notice.</p>
                <p>Don't have an account <Link to='/signup'>Create account</Link></p>
            </div>
        </div>
    )
}

export default LogIn
