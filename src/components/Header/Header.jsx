import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from '../../../src/assets/images/logo.png'
const Header = (props) => {
    return <header className={s.header}>
        <div className={s.logo}><img src={logo} />
            <span className={s.logoText}>deathly hallows</span></div>
        <div className={s.loginBlock}>
            { props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'}><button>Login</button></NavLink> }
        </div>
    </header>
}

export default Header;