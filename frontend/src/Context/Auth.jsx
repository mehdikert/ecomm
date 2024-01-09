import { useState, useContext, createContext, useEffect } from "react";
const AuthContext = createContext()
import axios from "axios";


export const AuthProvider = ({ children }) => {

    useEffect(() => {
        // default axios 
        axios.defaults.headers.common['Authorization'] = auth?.token
        const data = localStorage.getItem('auth')
        if (data) {
            const parseData = JSON.parse(data)
            setAuth({
                ...auth,
                user: parseData.user,
                token: parseData.token
            })
        }
    }, [])
    const [auth, setAuth] = useState({
        user: null,
        token: ""
    })

    return <AuthContext.Provider value={[auth, setAuth]}>
        {children}
    </AuthContext.Provider>
}


// Custom Hook 
export const useAuth = () => useContext(AuthContext);

export default { useAuth, AuthProvider };

