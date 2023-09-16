import React, { useState } from 'react'
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import './Login.css'
import { useNavigate, Link } from 'react-router-dom';
import logo from './images/amazonlogo.png';
import auth from './firebase';

function Signup() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                toast.success(`Account Created succefully`);
                navigate('/');
            }).catch((error) => alert(error.message));
    };

    const handleSignIn = (e) => {
        navigate('/login');

    };

    return (
        <>
            <div className='login'>
                <Link to='/' >
                    <img className='login_logo'
                        src={logo} alt="error" /> </Link>
                <div className='login_container'>
                    <h1>Sign-up</h1>
                    <form>

                        <h5>E-mail</h5>
                        <input type='text' placeholder='example@gmail.com' value={email}
                            onChange={(e) => setEmail(e.target.value)} />

                        <h5>Password</h5>
                        <input type='password' value={password}
                            onChange={(p) => setPassword(p.target.value)}
                        />
                        <button type='submit' onClick={signUp}
                            className='login__signInButton'>Sign Up</button>
                    </form>
                    <p>
                        By signing-up you agree to Terms & Conditions of Use & Sale.
                        Please see our Privacy Notice, our Cookies Notice and our
                        Interest-Based Ads Notice.
                    </p>
                    <h5 className="login__newToAmazon">Already Amazon Account ?</h5>
                    <button type='submit' onClick={handleSignIn}
                        className='login__registerButton'>sign In</button>
                </div>


            </div>
        </>
    )
}
export default Signup;
