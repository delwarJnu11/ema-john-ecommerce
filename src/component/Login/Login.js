import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';

    const handleGoogleSignIn = () => {
        signInWithGoogle().then(result => {
            history.push(redirect_uri);
        })
    }
    return (
        <div className="form">
            <div>
                <h2><small>Please Login Here</small></h2>
                <form onSubmit="">
                    <label htmlFor="emal">Email</label>
                    <input type="email" name="email" className="input-field" placeholder="Email" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="input-field" placeholder="password" />
                    <input type="submit" className="input-field add-cart-btn" value="Log In" />
                </form>
                <p>New to ema-john? <Link to='/register'>Create Account</Link></p>
                <button className="add-cart-btn" onClick={handleGoogleSignIn}>Google SignIn</button>
            </div>
        </div>
    );
};

export default Login;