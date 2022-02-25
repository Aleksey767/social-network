import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from '../../../src/assets/images/logo.png'
let name
const Header = ({login,isAuth,logout,profile,userId}) => {

    const getUserName = () => {
         if(userId===profile.userId){
             name = profile.fullName
         }
         return name
    }

    return <header className={s.header}>
        <div className={s.logo}><img src={logo} />
            <span className={s.logoText}>deathly hallows</span></div>
        <div className={s.loginBlock}>
            { isAuth

                ? <div>{profile ? getUserName() :name} - <button className={s.btn} onClick={ logout}>Log out</button> </div>
                : <NavLink to={'/login'}><button className={s.btn}>Login</button></NavLink> }
        </div>
    </header>
}

export default Header;