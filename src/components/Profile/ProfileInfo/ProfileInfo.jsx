import React from 'react';
import s from './ProfileInfo.module.css';
import image from "../../../assets/images/image.jpg";
import casualAvatar from "../../../assets/images/user.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    const onMainPhotoSelected = (e) => {
    if(e.target.files.length){
    props.savePhoto(e.target.files[0]);
}
    }
    return (
        <div className={s.profileInfo}>
            <div> 

                <div className={s.descriptionBlock}>
        
                    <img className={s.avatar} src={props.profile.photos.large===null 
                    ? casualAvatar : props.profile.photos.large }/>
                    {props.isOwner &&<input type={"file"} onChange={onMainPhotoSelected}></input>}
                    
                   


                </div>
                <div className={s.info}>
                <ProfileStatusWithHooks   status={props.status} updateStatus={props.updateStatus}/>
                        <b className={s.name}>{props.profile.fullName}</b>
                        <div><span>About me:</span>{props.profile.aboutMe}</div>
                        <div>
                            <span>Work:</span>{(props.profile.lookingForAJob === true) ? 'Ищу работу' : 'Не ищу работу'}
                        </div>
                        <div><span>Description:</span> {props.profile.lookingForAJobDescription}</div>
                    </div>
            </div>
        </div>
    )
}

export default ProfileInfo;