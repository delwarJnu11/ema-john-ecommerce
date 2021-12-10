import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <div className="form">
            <div>
                <h2><small>Please Register Here</small></h2>
                <form onSubmit="">
                    <label htmlFor="emal">Email</label>
                    <input type="email" name="email" className="input-field" placeholder="Email" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="input-field" placeholder="password" />
                    <input type="submit" className="input-field add-cart-btn" value="Register" />
                </form>
                <p>already have an account? <Link to='/Login'>Log in</Link></p>
                <button className="add-cart-btn" onClick={signInWithGoogle}>Google SignIn</button>
            </div>
        </div>
    );
};

export default Register;