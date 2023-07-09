import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
const RegisterUser = () => {
    const [{ user }, dispatch] = useStateValue()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const register = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:6000/api/auth/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, email: email, password: password })
        });

        const json = await response.json();
        if (json.success) {
            alert('Your account successfully created')
            navigate('/')
            // localStorage.setItem('auth', json.authToken)
            dispatch({
                type: 'SET_USER',
                user: email
            });
            localStorage.setItem("set-email", email)

        }
        else {
            alert('Failed to create your account')
        }
    }
    return (
        <div className='login'>
            <i className="fa-solid fa-circle-user"></i>
            <div className='login__container'>
                <h1>Sign In</h1>
                <form>
                    <h5>Name</h5>
                    <input type='text' value={name} onChange={event => setName(event.target.value)} />
                    <h5>Email</h5>
                    <input type='email' value={email} onChange={event => setEmail(event.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={event => setPassword(event.target.value)} />
                    <button type='submit' className='login__signInButton' onClick={register}>Create Account</button>

                </form>
                <p>By continuing, you agree to ecommerce's Conditions of Use and Privacy Notice.</p>

            </div>
        </div>
    )
}

export default RegisterUser
