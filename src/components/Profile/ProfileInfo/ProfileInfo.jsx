import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import image from "../../../assets/images/image.jpg"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.profileInfo}>
            <div>
            <p className={s.fig}><img className={s.image} src={image}></img></p>
                     
            <div className={s.descriptionBlock}>
            <img className={s.avatar} src={props.profile.photos.large}/>
                <div className={s.info}>
                <b className={s.name}>{props.profile.fullName}</b>
                <div><span>Status:</span>{props.profile.aboutMe}</div>
                 <div><span>Work:</span>{(props.profile.lookingForAJob===true)?'Ищу работу':'Не ищу работу'}</div>
                 <div><span>Description:</span> {props.profile.lookingForAJobDescription}</div>
                </div>
                 
                 
            </div>
        </div>
        </div>
    )
}

export default ProfileInfo;