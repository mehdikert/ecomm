import React, { useState } from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar/Navbar"
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home'
import About from './Pages/About/About';
import PageNotFound from './Pages/pagenotfound/PageNotFound';
import Policy from './Pages/Policy/Policy'
import Contact from './Pages/Contact/Contact'
import Loginform from './Components/LogForm/Loginform';
import RegisterForm from './Components/registerForm/RegisterForm';
import Dashboard from './Pages/user/Dashboard';
import Private from './Components/Route/Private';
import AdminRoute from './Components/Route/AdminRoutes';
import AdminDashboard from './Pages/admin/AdminDashboard';
import CreateCategory from './Pages/admin/CreateCategory';



function App() {
    return (
        <div className='app'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/dashboard' element={<Private />} >
                    <Route path='user' element={<Dashboard />} />
                </Route>

                <Route path='/dashboard' element={<AdminRoute />} >
                    <Route path='admin' element={<AdminDashboard />} />
                    <Route path='admin/createcategory' element={<CreateCategory />} />
                </Route>


                <Route path='/about' element={<About />} />
                <Route path='/policy' element={<Policy />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/register' element={<RegisterForm />} />
                <Route path='/login' element={<Loginform />} />
                <Route path='/*' element={<PageNotFound />} />
                <Route path='/category' element={<CreateCategory />} />
            </Routes>

            <Footer />
        </div>
    )
}

export default App
