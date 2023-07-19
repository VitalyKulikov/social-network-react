import React from 'react';
import usersPhoto from './../../assets/image/defaultUsersPhoto.png';
import s from './Users.module.css';
import {NavLink} from 'react-router-dom';
import Paginator from '../common/pagination/Paginator';

let Users = ({currentPage, totalCount, pageSize, onPageChenged, users,...props}) => {

    return (
        <div>
        <div>
            <Paginator currentPage={currentPage} pageSize={pageSize}
                       totalCount={totalCount} onPageChenged={onPageChenged}/>
        </div>


        {
            users.map((u) => (
                <div key={u.id} className={s.user}>
                    <div className={s.ava}>
                        <NavLink to={'/profile/' + u.id}>
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
                                        (id) => id === u.id,
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
                                        (id) => id === u.id,
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
            ))
        }
        </div>
)
};

export default Users;
