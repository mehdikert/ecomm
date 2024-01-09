import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useLocation } from "react-router-dom"
import React, { useState, useEffect } from 'react';




function Spinnerdefault({ path = "login" }) {
    const [count, setCount] = useState(5)
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue);
        }, 1000)
        count === 0 && navigate(`/${path}`, {
            state: location.pathname
        })
        return () => {
            clearInterval(interval)
            localStorage.removeItem('auth')
        }
    }, [count, navigate, location]
    )
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            gap: "50px"
        }}>
            <h1 className=''>redirecting to you in {count} seconde</h1>
            <Spinner animation="border" role="status" className='container' style={{ margin: "0" }}>
                <span className="visually-hidden" >Loading...</span>
            </Spinner>
        </div>
    );
}

export default Spinnerdefault;