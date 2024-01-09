import React from 'react'
import { Link } from 'react-router-dom'
import './notfound.css'
function PageNotFound() {
    return (
        <div className='errorPage container'>
            <div className='containerError'>
                <h1>Oops!</h1>
            </div>
            <h5>404 - PAGE NOT FOUND</h5>
            <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
            <Link to={'/'}>GO TO HOME PAGE</Link>
        </div>
    )
}

export default PageNotFound