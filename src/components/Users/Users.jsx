import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import Paginator from './Paginator';

let Users = ({currentPage,onPageChanged,totalUsersCount,followingInProgress,pageSize,...props}) => {
    return <div className={s.users}>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize}/>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                       <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}
                             className={s.userPhoto}/>
                       </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id);
                            }}>Unfollow</button>

                            : <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div className={s.status}>Status:{u.status}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;