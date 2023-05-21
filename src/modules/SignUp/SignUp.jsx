import React, { useEffect, useRef, useState } from 'react'
import styles from './SignUp.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';

const SignUp = () => {
    const firstNameInputRef = useRef(null);
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: "",
        fName: '',
        lName: '',
        file: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        if (e.target.id === 'photo') {
            const reader = new FileReader();
            reader.onload = () => {
                setData(prev => ({ ...prev, file: reader.result }))
            }

            reader.onerror = () => {
                setError("Something went wrong. Please try again!");
            }

            reader.readAsDataURL(e.target.files[0]);
        }
        else
            setData(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate('/');
    }

    const googleLoginHandler = e => {
        navigate('/');
    }

    useEffect(() => {
        if (firstNameInputRef.current)
            firstNameInputRef.current.focus();
    }, []);


    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1>Sign Up</h1>
                <form action="#" onSubmit={handleSubmit}>
                    <input type="text" required placeholder='First Name' ref={firstNameInputRef} id='fName' onChange={handleChange} value={data.fName} />
                    <input type="text" required placeholder='Last Name' id='lName' onChange={handleChange} value={data.lName} />
                    <input type="email" required placeholder='Email' id='email' onChange={handleChange} value={data.email} />
                    <input autoComplete='on' type="password" required placeholder='Password' id='password' onChange={handleChange} value={data.password} />
                    <input type="file" id='photo' accept='image/*' onChange={handleChange} />

                    <label htmlFor="photo"><img src={data.file ? data.file : `/imgs/avatar.png`} alt="Avatar" /><span className={styles.photo}>Upload Photo</span></label>
                    <p className={`${styles.error} ${error ? styles.show : ''}`}>{error}</p>
                    <button type="submit">Sign Up</button>
                    <button onClick={googleLoginHandler} className={styles.google} type='button'><span><FcGoogle /></span>Continue with Google</button>
                </form>
                <p>Already have account? <Link to='/signin'>Sign In</Link></p>
            </div>
        </div>
    )

}

export default SignUp;
