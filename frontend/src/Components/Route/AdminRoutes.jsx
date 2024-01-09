import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinnerdefault from '../Spinner'


function AdminRoute() {
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth();
    const naviagte = useNavigate()
    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get("/auth/admin-auth");
            if (res.data.ok) {
                setOk(true);
            } else {
                setOk(false);
            }
        };
        if (auth?.token) {
            authCheck()
        };
    }, [auth?.token]);
    return ok ? <Outlet /> : <Spinnerdefault path="" />;
}

export default AdminRoute