import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import casualAvatar from "../../../assets/images/user.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile,savePhoto,isOwner,status,saveProfile,updateStatus}) => {

    let [editMode, setEditMode] = useState(false);

    const onMainPhotoSelected = (e) => {
    if(e.target.files.length){
    savePhoto(e.target.files[0]);
}
    }

    const onSubmit = (formData) =>{
        saveProfile(formData).then(
            ()=>{
                setEditMode(false)
            }
        )

    }
    return (
        <div className={s.profileInfo}>
            <div> 

                <div className={s.descriptionBlock}>
        
                    <img className={s.avatar} src={profile.photos.large===null
                    ? casualAvatar : profile.photos.large }/>
                    {isOwner &&<input type={"file"} onChange={onMainPhotoSelected}></input>}
                    <ProfileStatusWithHooks   status={status}  updateStatus={updateStatus}/>
                    {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                        : <ProfileData goToEditMode={()=>{setEditMode(true)}} profile={profile} isOwner={isOwner}/>
                         }
                </div>

            </div>
        </div>
    )
}
const ProfileData = ({profile,isOwner,goToEditMode}) =>{
    return <div className={s.info}>
        {isOwner &&
            <button onClick={goToEditMode}>Edit</button>}
        <b className={s.name}>{profile.fullName}</b>
        <div><span>About me:</span>{profile.aboutMe}</div>
        <div>
            <span>Work:</span>{(profile.lookingForAJob === true) ? 'Ищу работу' : 'Не ищу работу'}
        </div>
        {profile.lookingForAJob &&
        <div><span>Description:</span> {profile.lookingForAJobDescription}</div>}

        <b>Contacts:</b>{Object.keys(profile.contacts).map(key=>{
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
    })}
    </div>

}
const Contact = ({contactTitle,contactValue})=>{
    return <div>
        <b>{contactTitle}:</b>{contactValue}
    </div>
}
export default ProfileInfo;