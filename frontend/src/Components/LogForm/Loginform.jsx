
import { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useNavigate, useLocation, Link } from "react-router-dom"
import { useAuth } from '../../Context/Auth';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate('/');
    const location = useLocation()
    const [auth, setAuth] = useAuth()
    useEffect(() => {
        setAuth({
            ...auth, user: null, token: ''
        })
        localStorage.removeItem('Token')
    }, [])
    return (
        < Form className='form login container-fluid' onSubmit={async (e) => {
            e.preventDefault();
            try {
                const response = await axios.post('http://localhost:3000/auth/login',
                    {
                        email,
                        password
                    })
                if (response.data.success && response) {
                    toast.success(response.data.message);
                    setAuth({
                        ...auth,
                        user: response.data,
                        token: response.data.token,
                    });
                    localStorage.setItem('auth', JSON.stringify(response.data))
                    navigate(location.state || '/')
                }
                if (!response.data.success) {
                    toast.error(response.data.message)
                }

            } catch (error) {
                console.error('Login failed:', error);
                toast.error('Something went wrong. Please try again later.');
            }
        }
        }>

            <h1>Login</h1>
            {/**email */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.currentTarget.value)} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            {/**password */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.currentTarget.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Link to={''}>Forgot your password ?</Link>
        </Form >
    )
}

export default LoginForm;