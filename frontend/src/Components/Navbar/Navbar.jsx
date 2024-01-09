import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png'
import './navbar.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuth } from "../../Context/Auth";
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'

function Navbar() {

    const CustomLogoToast = () => {
        <img src="" alt="Logout logo" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
    }
    const navigate = useNavigate()

    const [auth, setAuth] = useAuth()
    function handleLogOut() {
        setAuth({
            user: null, token: ''
        })
        localStorage.removeItem('auth')
        toast.success('Logout success')
        navigate('/login')
    }
    return (
        <div className="header bg-dark text-light ">
            < ToastContainer autoClose={1000} theme="dark" progressStyle={{ background: "white" }} />
            <div className="navbar container bg-dark text-light ">
                <Link to={"/"}><img src={logo} alt="Ecommerce" width={"100px"} /></Link>
                <ul>
                    <Link to={'/'}>Home</Link>
                    {/*↓↓↓↓↓↓↓↓↓↓↓↓ DropDown Clotes ↓↓↓↓↓↓↓↓↓↓↓↓*/}
                    <NavDropdown
                        id="nav-dropdown1-dark-example"
                        title="Clothes"
                        menuVariant="dark"
                        className="titleDropDown"
                    >
                        <NavDropdown.Item ><Link to={'/tops'}>Tops</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to={'/bottoms'}>Bottoms</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to={'/sneakers'}>Sneakers</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item><Link to={'/product'}>All</Link></NavDropdown.Item>
                    </NavDropdown>
                    {/*↑↑↑↑↑↑↑↑↑↑ DropDown Clotes ↑↑↑↑↑↑↑↑↑↑ */}


                    {/*↓↓↓↓↓↓↓↓↓↓↓↓ DropDown Category ↓↓↓↓↓↓↓↓↓↓↓↓ */}
                    <NavDropdown
                        id="nav-dropdown2-dark-example"
                        title="Category"
                        menuVariant="dark"
                        className="titleDropDown"
                    >
                        <NavDropdown.Item ><Link to={'/clothes/category/men'}>Men</Link></NavDropdown.Item>
                        <NavDropdown.Item ><Link to={'/clothes/category/women'}>Women</Link></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item ><Link to={'/clothes/category/'}>All</Link></NavDropdown.Item>
                    </NavDropdown>
                    {/*↑↑↑↑↑↑↑↑↑↑ DropDown Category ↑↑↑↑↑↑↑↑↑↑ */}
                </ul>


                <div className="navBtn">
                    {
                        !auth.user ? (
                            <>
                                <Link id="registerBtn" to={"/register"}>Register</Link>
                                <Link id="loginBtn" to={"/login"}>Login</Link>
                            </>
                        ) :
                            <>
                                <NavDropdown
                                    id="nav-dropdown1-dark-example"
                                    title={(auth.user.username)}
                                    menuVariant="dark"
                                    className="titleDropDown"
                                >
                                    <NavDropdown.Item >
                                        <Link to={`/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user'}`} className="dashboard">
                                            Dashboard
                                        </Link>
                                    </NavDropdown.Item>
                                    {
                                        auth?.user?.role === 1 ?
                                            <NavDropdown.Item>
                                                <Link to={'/category'}>Category</Link>
                                            </NavDropdown.Item>
                                            : ""
                                    }
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item><Link onClick={handleLogOut}> Logout</Link></NavDropdown.Item>
                                </NavDropdown>

                                <div className="navCards">
                                    <Link><FontAwesomeIcon icon={faCartShopping} /> </Link>
                                    <FontAwesomeIcon icon={faHeart} style={{ color: "#bcc6d7", }} />
                                </div>
                            </>
                    }

                </div>

            </div>
        </div>
    );
}

export default Navbar;  