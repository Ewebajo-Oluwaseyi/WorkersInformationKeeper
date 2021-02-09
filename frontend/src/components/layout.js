import React, {useContext} from 'react';
import Main from './main';
import Alert from './alert/Alert';
import {Layout, Header, Navigation} from 'react-mdl'
import {Link} from 'react-router-dom';
import AuthContext from '../context/auth/authContext';
import InformationContext from '../context/information/informationContext'
import style from './layout.module.css'


function LAYOUT() {
    const Authcontext = useContext(AuthContext);

    const informationcontext = useContext(InformationContext);

    const{clearInformation} = informationcontext

    const {isAuthenticated, logout, user} = Authcontext;

    const onLogout = () => {
        logout();
        clearInformation();
    }

    const authLinks = (
        <div style={{display: 'flex', padding: '0.45rem', margin: '0 0.25rem'}}>
            <li style={{textDecoration: 'none', listStyleType: 'none', fontSize: '20px'}}>Hello {user && user.name}</li>
            <li style={{textDecoration: 'none', listStyleType: 'none'}}>
            <Link to="/about" className={style.links}>About</Link>
            </li>
            <li style={{textDecoration: 'none', color: 'white', listStyleType: 'none'}}>
                <Link to="#!" onClick={onLogout} className={style.links}>
                    <i className="fa fa-sign-out"></i> Logout
                </Link>
            </li>
        </div>
    )

    const guestLinks = (
        <div>
                <Link to="/register" className={style.links}>Register</Link>
                <Link to="/login" className={style.links}>Login</Link>
        </div>
    )
    return (
        <div>
        <div className={style.header}>
        <h5 className={style.h5} >
           <i className="fa fa-folder"></i> WORKERS INFORMATION KEEPER
        </h5>       
        <ul>
        {isAuthenticated ? authLinks : guestLinks}
        </ul>
        </div>
            <Alert/>
            <Main />
        </div>
    )
}

export default LAYOUT
