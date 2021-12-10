import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header-wrapper">
            <img className="logo" src={logo} alt="Logo" />
            <nav className="nav-menu">
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/orders">Orders Review</NavLink>
                <NavLink to="/inventory">Inventory Here</NavLink>
                {user.email && <span style={{ color: "white" }}>Hello, {user.displayName} <img className="user-image" width="50px" height="50px" src={user.photoURL} alt="" /></span>}
                {user.email ? <button onClick={logOut}>Log Out</button>
                    : <NavLink to="/login">Log In</NavLink>}
            </nav>
        </div >
    );
};

export default Header;