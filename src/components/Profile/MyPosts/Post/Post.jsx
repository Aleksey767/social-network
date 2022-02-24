import React from 'react';
import s from './Post.module.css';
import user from "../../../../assets/images/user.png";
const Post = ({profile,message,likesCount}) => {
  return (
    <div className={s.item}>
     
        <div className={s.message}> <img src={profile.photos.large === null
            ? user : profile.photos.large} />{ message }</div>
          <div>
        <div className={s.likeCount}>Like:</div> { likesCount }
      </div>
    </div>
  )
}

export default Post;