import React from "react";
import s from './notFound.module.css'
import {NavLink} from "react-router-dom";

const notFound = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.titleError}>404</div>
            <div className={s.title}>Page Not Found!</div>
            <div className={s.subTitle}>MOST LIKELY THE PAGE YOU ARE LOOKING FOR THERE</div>
            <NavLink to={'/profile'}><button className={s.btn}>Back to home</button></NavLink>
        </div>
    )
}

export default notFound;