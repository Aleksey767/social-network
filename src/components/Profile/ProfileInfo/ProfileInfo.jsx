import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import casualAvatar from "../../../assets/images/user.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, savePhoto, isOwner, status, saveProfile, updateStatus}) => {
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    let [editMode, setEditMode] = useState(false);
    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }

    return (
        <div className={s.profileInfo}>
            <div className={s.imageBlock}>
                <img className={s.avatar} src={profile.photos.large === null
                    ? casualAvatar : profile.photos.large}/>
                <label>{isOwner &&
                    <div className={s.fileUpload}><input className={s.downloadImage}
                                                         type={"file"} onChange={onMainPhotoSelected}/><span>Upload a photo</span>
                    </div>}
                </label>
            </div>
            <div className={s.descBlock}>
                <div className={s.nameStatusBlock}>
                    <div className={s.name}>{profile.fullName}</div>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
                <div className={s.infoBlock}>
                    {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                        : <ProfileData goToEditMode={() => {
                            setEditMode(true)
                        }} profile={profile} isOwner={isOwner}/>
                    }
                </div>
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    let [showDetails, setShowDetails] = useState(false);
    const setDetails = () => {
        showDetails ? setShowDetails(false) : setShowDetails(true)
    }

    return <div>
        <div className={s.infoItem}>
            <div className={s.subTitle}>About me:</div>
            <div className={s.infoText}>{profile.aboutMe}</div>
        </div>
        <div className={s.infoItem}>
            <div className={s.subTitle}>Work:</div>
            <div className={s.infoText}>{(profile.lookingForAJob === true) ? 'Looking for a job' : 'Not looking for a job'}</div>
        </div>
        {profile.lookingForAJob &&
            <div className={s.infoItem}>
                <div className={s.subTitle}>Description:</div>
                <div className={s.infoText}>{profile.lookingForAJobDescription}</div>
            </div>}
        <div className={s.topBorder}>
            <button className={s.btn} onClick={setDetails}>Show details</button>
        </div>
        {showDetails && <ShowDetails profile={profile} isOwner={isOwner} goToEditMode={goToEditMode}
                                     s1/>}
    </div>
}

const ShowDetails = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        {isOwner &&
            <div className={s.editWrapper}>
                <button className={s.btn + ' ' + s.editInfo} onClick={goToEditMode}>Edit</button>
            </div>}
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.infoItem}>
        <div className={s.subTitle}>{contactTitle}:</div>
        <div className={s.infoText}>{contactValue}</div>
    </div>
}
export default ProfileInfo;