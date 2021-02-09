import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import style from './Register.module.css'

function Register(props) {

    const alertContext = useContext(AlertContext);

    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;

    const { register, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        if(isAuthenticated){
            props.history.push('/')
        }


        if(error === 'User already exist') {
            setAlert(error);
            clearErrors();
        }
        //eslint-disable-next-line
    }, [error, isAuthenticated, props.history])

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = user;

    const onChange = e => setUser({...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if(name === '' || email === '' || password === ''){
            setAlert('Please enter all fields');
        } else if(password !== password2){
            setAlert('Please do not match');
        } else {
             register({
                 name,
                 email,
                 password
             });
        }
        
    }

    return (
        <div >
            <form onSubmit={onSubmit} className={style.form}>
            <h3>Account Register</h3>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={name} onChange={onChange} className={style.input} required/>
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" value={email} onChange={onChange} className={style.input} required/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} className={style.input} required minLength="6"/>
                </div>
                <div>
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password" name="password2" value={password2} onChange={onChange} className={style.input} required minLength="6"/>
                </div>
                <input type="submit" value="Register" className={style.submit}/>
            </form>
        </div>
    )
}

export default Register
