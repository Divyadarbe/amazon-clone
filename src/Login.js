import React, {useState} from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import {auth} from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login=(e)=>{
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            //logged in , redirect to the home page
            history.push('/');
        })
        .catch(e=>alert(e.message))
    }
    const register=(e)=>{
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
        .then(auth =>{
            //created a user with email and password and logged in & redirect to home
            history.push('/');
        })
        .catch(e=>alert(e.message));
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' className='login__logo' alt='login-logo' />
            </Link>
            <div className='login__container'>
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type='email' value={email} onChange={event=>setEmail(event.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={event=>setPassword(event.target.value)}/>
                    <button type='submit' onClick={login}  className='login__signInButton'>Sign In</button>
                </form>

                <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice
                    and our Interest-Based Ads Notice.
                </p>
                <button className='login__registerButton' onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
