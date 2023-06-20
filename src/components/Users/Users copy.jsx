import React from 'react'
import usersPhoto from "./../../assets/image/defaultUsersPhoto.png"
import s from "./Users.module.css"
import {NavLink} from "react-router-dom";
import classnames from 'classnames';
import './pagination.scss';




let Users = (props) => {

    /*const totalpagesCount = Math.ceil(props.totalCount / props.pageSize)*/
    
    export const range = (start, end) => {
        let length = end - start + 1;
        return Array.from({ length }, (_, idx) => idx + start);
      };

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

      export const Pagination = props => { 
        {props.propsonPageChange, props.totalCount, 
            props.siblingCount, props.currentPage, 
            props.pageSize, props.className}
      
        // If there are less than 2 times in pagination range we shall not render the component
        if (currentPage === 0 || paginationRange.length < 2) {
          return null;
        }
      
        const onNext = () => {
          onPageChange(currentPage + 1);
        };
      
        const onPrevious = () => {
          onPageChange(currentPage - 1);
        };
      
        let lastPage = paginationRange[paginationRange.length - 1];
        return (
          <ul
            className={classnames('pagination-container', { [className]: className })}
          >
             {/* Left navigation arrow */}
            <li
              className={classnames('pagination-item', {
                disabled: currentPage === 1
              })}
              onClick={onPrevious}
            >
              <div className="arrow left" />
            </li>
            {paginationRange.map(pageNumber => {
               
              // If the pageItem is a DOT, render the DOTS unicode character
              if (pageNumber === DOTS) {
                return <li className="pagination-item dots">&#8230;</li>;
              }
              
              // Render our Page Pills
              return (
                <li
                  className={classnames('pagination-item', {
                    selected: pageNumber === currentPage
                  })}
                  onClick={() => onPageChange(pageNumber)}
                >
                  {pageNumber}
                </li>
              );
            })}
            {/*  Right Navigation arrow */}
            <li
              className={classnames('pagination-item', {
                disabled: currentPage === lastPage
              })}
              onClick={onNext}
            >
              <div className="arrow right" />
            </li>
          </ul>
        );
      };


    return <div className={s.wrapper}>

        <div> {Pagination} </div>

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