import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "./../common/Preloader/Preloader";

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <ProfileInfo savePhoto={props.savePhoto} saveProfile={props.saveProfile}
                         isOwner={props.isOwner} profile={props.profile} status={props.status}
                         updateStatus={props.updateStatus}/>
            <MyPostsContainer isOwner={!props.match.params.userId}/>
        </div>
    )
}

export default Profile;