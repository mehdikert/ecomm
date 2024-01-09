import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='bg-dark text-light p-3'>
            <h6>All Right Reserverd &copy; . {new Date().getFullYear()} / {new Date().getFullYear() + 1}</h6>
            <div>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/policy'}>Policy & Privacy</Link>
            </div>
        </div>
    )
}

export default Footer