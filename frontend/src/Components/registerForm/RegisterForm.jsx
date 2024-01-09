
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./registerform.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useNavigate } from "react-router-dom"
function RegisterForm() {


    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [sexe, setSex] = useState('');
    const navigate = useNavigate('/login');

    return (
        <Form className='form register container-fluid' onSubmit={async (e) => {
            e.preventDefault();
            try {
                const response = await axios.post('http://localhost:3000/auth/register',
                    {
                        firstname,
                        lastname,
                        username,
                        email,
                        password,
                        phone,
                        address,
                        sexe: sexe,
                    })
                if (response && response.data.success) {
                    toast.success(response.data.message)
                    navigate('/login')
                } else {
                    toast.error(response.data.message)
                }
            } catch (error) {
                console.log(error);
                toast.error('Something wrong')
            }
        }}>

            <h1>Register</h1>
            <div className='divForm'>
                {/**firstname */}
                <Form.Group className="mb-3" controlId="formBasicFisrtName">
                    <Form.Label>Fistname</Form.Label>
                    <Form.Control type="text" placeholder="Enter Fisrtname" value={firstname} required onChange={(e) => setFirstname(e.currentTarget.value)} />
                </Form.Group>
                {/**lastname */}
                <Form.Group className="mb-3" controlId="formBasicLastname">
                    <Form.Label>Lastname</Form.Label>
                    <Form.Control type="text" placeholder="Enter Lastname" value={lastname} required onChange={(e) => setLastname(e.currentTarget.value)} />
                </Form.Group>
            </div>
            {/**Username */}
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" value={username} required onChange={(e) => setUsername(e.currentTarget.value)} />
            </Form.Group>
            <div className='divForm'>
                {/**address*/}
                <Form.Group className="mb-3" controlId="formBasicAdress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="ex : 07 rue des clodo , Paris 75  ...." value={address} required onChange={(e) => setAddress(e.currentTarget.value)} />
                </Form.Group>
                {/**Phone number*/}
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="number" placeholder="exemple ...584697414" value={phone} required onChange={(e) => setPhone(e.currentTarget.value)} />
                </Form.Group>
            </div>

            {/**email */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" value={email} required onChange={(e) => setEmail(e.currentTarget.value)} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            {/**password */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} required onChange={(e) => setPassword(e.currentTarget.value)} />
            </Form.Group>
            {/**SEXE */}
            <div className='sexe'>
                <Form.Label>Sexe </Form.Label>
                <select name="sex" id="sex" onChange={(e) => { setSex(e.target) }}>
                    <option value={'Male'} defaultChecked>Male</option>
                    <option value={'Female'}>Female</option>
                    <option value={'Other'}>Other</option>
                </select>
            </div>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>


    );

}

export default RegisterForm