import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import style from './Register.module.css'

function Login(props) {
    const alertContext = useContext(AlertContext);

    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;

    const { login, error, clearErrors, isAuthenticated, loading } = authContext;

    useEffect(() => {
        if(isAuthenticated){
            props.history.push('/')
        }


        if(error === 'Invalid Credentails' ) {
            setAlert(error);
            clearErrors();
        }
    
    }, // eslint-disable-next-line
    [error, isAuthenticated, loading, props.history]);

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const {email, password } = user;

    const onChange = e => setUser({...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        login({
            email,
            password
        })
    }

    return (
        <div >
            <form onSubmit={onSubmit} className={style.form}>
            <h3>Account Login</h3>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" value={email} onChange={onChange} className={style.input} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} className={style.input} required minLength="6"/>
                </div>
                <input type="submit" value="Login" className={style.submit}/>
            </form>
        </div>
    )
}

export default Login
