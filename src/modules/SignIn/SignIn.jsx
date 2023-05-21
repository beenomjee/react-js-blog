import React, { useEffect, useRef, useState } from 'react'
import styles from './SignIn.module.scss';
import { Link, useNavigate, } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'

const SignIn = () => {
    const emailInputRef = useRef(null);
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
    })
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setData(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate('/');
    }

    const onGoogleLogin = async (e) => {
        navigate('/');
    }

    useEffect(() => {
        if (emailInputRef.current)
            emailInputRef.current.focus();
    }, []);


    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1>Sign In</h1>
                <form action="#" onSubmit={handleSubmit}>
                    <input type="email" required placeholder='Email' ref={emailInputRef} value={data.email} onChange={handleChange} id='email' />
                    <input autoComplete='on' type="password" required placeholder='Password' value={data.password} onChange={handleChange} id='password' />
                    <p className={`${styles.error} ${error ? styles.show : ''}`}>{error}</p>
                    <button type="submit">Login</button>
                    <button onClick={onGoogleLogin} className={styles.google} type='button'><span><FcGoogle /></span>Continue with Google</button>
                </form>
                <p>Don&#39;t have account? <Link to='/signup'>Sign Up</Link></p>
            </div>
        </div>
    )
}

export default SignIn