import React from "react";
import usersPhoto from "./../../assets/image/defaultUsersPhoto.png";
import s from "./Users.module.css";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={s.wrapper}>
      <div className={s.pagesCount}>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && s.selectorPage}
              onClick={() => {
                props.onPageChenged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>

      <div>
        {props.users.map((u) => (
          <div key={u.id} className={s.user}>
            <div className={s.ava}>
              <NavLink to={"/profile/" + u.id}>
                <div className={s.photoBlock}>
                  <img
                    src={u.photoUrl != null ? u.photoUrl : usersPhoto}
                    alt="logo"
                    className={s.userAva}
                  ></img>
                </div>
              </NavLink>
              <div className={s.button}>
                {u.followed ? (
                  <button
                    className={s.button1}
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    className={s.button1}
                    disabled={props.followingInProgress.some(
                      (id) => id === u.id
                    )}
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
            <div className={s.body}>
              <div className={s.userInfo}>
                <span className={s.fullName}>{u.name} </span>
                <span className={s.status}> {u.status} </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
