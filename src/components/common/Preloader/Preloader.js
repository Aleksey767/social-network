import React from 'react';
import preloader from "../../../assets/images/preloader.gif";
import s from "../Preloader/preloader.module.css"

let Preloader = (props) => {
    return <div className={s.wrapper}>
        <img src={preloader} />
    </div>
}

export default Preloader;