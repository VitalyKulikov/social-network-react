import React from 'react'
import usersPhoto from "./../../assets/image/defaultUsersPhoto.png"
import s from "./Users.module.css"
import {NavLink} from "react-router-dom";




let Users = (props) => {

    const usePagination = ({totalCount, pageSize, siblingCount, currentPage})=>{
        const paginationRange = useMemo(() => {
            
            const totalPageCount = Math.ceil(props.totalCount / props.pageSize);
            const totalPageNumbers = siblingCount + 5;
            
            if (totalPageNumbers >= totalPageCount) {
                return range(1, totalPageCount);}
        
                const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
                const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

                const shouldShowLeftDots = leftSiblingIndex > 2;
                const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

                const firstPageIndex = 1;
                const lastPageIndex = totalPageCount;

                if (!shouldShowLeftDots && shouldShowRightDots) {
                    let leftItemCount = 3 + 2 * siblingCount;
                    let leftRange = range(1, leftItemCount);
              
                    return [...leftRange, DOTS, totalPageCount];
                  }

                if (shouldShowLeftDots && !shouldShowRightDots) {
      
                    let rightItemCount = 3 + 2 * siblingCount;
                    let rightRange = range(
                      totalPageCount - rightItemCount + 1,
                      totalPageCount
                    );
                    return [firstPageIndex, DOTS, ...rightRange];
                  }

                  if (shouldShowLeftDots && shouldShowRightDots) {
                    let middleRange = range(leftSiblingIndex, rightSiblingIndex);
                    return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
                  }
                }, [totalCount, pageSize, siblingCount, currentPage]);
              
                return paginationRange;
              };
      }

    return <div className={s.wrapper}>
        <div className={s.pagesCount}>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectorPage}
                             onClick={(e) =>
                             {props.onPageChenged(p);}}>{p}</span>
            })}
        </div>

        <div>{props.users.map(u => <div key={u.id} className={s.user}>
            <div className={s.ava}>
                <NavLink to={'/profile/'+ u.id }>
                    <div className={s.photoBlock}>
                        <img src={u.photoUrl != null ? u.photoUrl : usersPhoto} alt="logo" className={s.userAva}></img>
                    </div>
                </NavLink>
                <div className={s.button}>
                    {u.followed 
                    ? <button className={s.button1} 
                    disabled={props.followingInProgress.some(id=>id === u.id)} 
                    onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                    : <button className={s.button1} 
                    disabled={props.followingInProgress.some(id=>id===u.id)} 
                    onClick={() => {props.follow(u.id)}}>Follow</button>
                    }
                </div>
            </div>
            <div className={s.body}>
                <div className={s.userInfo}><span className={s.fullName}>{u.name} </span>
                    <span className={s.status}> {u.status} </span></div>
            </div>
        </div>)}</div>
    </div>

}

export default Users;