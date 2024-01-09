import React from 'react'
import { useState, useEffect } from 'react'
import { useAuth } from '../../Context/Auth'
import { Outlet } from "react-router-dom"
import axios from 'axios'
import Spinnerdefault from '../Spinner'



function Private() {
    const [ok, setOk] = useState(false)
    const [auth, setAuth] = useAuth()
    useEffect(() => {
        const authCheck = async () => {
            const res = axios.get("/auth/user-auth");
            if (res.data.ok) {
                setOk(true)
            } else {
                setOk(false)
            }
            if (auth?.token) { authCheck() }
        }
    }, [auth?.token])
    return (
        ok ? console.log("dashboard") : <Spinnerdefault />
    )
}

export default Private