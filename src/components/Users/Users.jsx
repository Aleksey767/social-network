import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import Paginator from './Paginator';
let arr=[1,2,3,4,5]
let result = arr.map((elem)=>elem*2)
console.log(result)
let Users = ({currentPage, onPageChanged, totalUsersCount, followingInProgress, pageSize, ...props}) => {
    return <div className={s.users}>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount}
                   pageSize={pageSize}/>
        <div className={s.profileUsersWrapper}>
        {
            props.users.map(u => <div className={s.item} key={u.id}>
                    <div>
                       <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}
                             className={s.userPhoto}/>
                       </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button className={s.btn} disabled={followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.unfollow(u.id);
                                      }}>Unfollow</button>

                            : <button className={s.btn} disabled={followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.follow(u.id)
                                      }}>Follow</button>}

                    </div>
                        <div className={s.userName}>{u.name}</div>
            </div>)
        }
        </div>
    </div>
}

export default Users;