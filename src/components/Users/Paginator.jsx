import React from 'react';
import s from "./users.module.css"; 

let Paginator = ({totalUsersCount,pageSize,currentPage,onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount /pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount / 180; i++) {
        pages.push(i);
    }
    return <div>
            {pages.map(p => {
                return <span className={currentPage === p && s.selectedPage}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}
        </div>
}

export default Paginator;