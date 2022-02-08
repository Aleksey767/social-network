import React from 'react';
import s from './Post.module.css';
import user from "../../../../assets/images/user.png"
const Post = (props) => {
  return (
    <div className={s.item}>
     
        <div className={s.message}> <img src={user} />{ props.message }</div>
          <div>
        <span>Like:</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;