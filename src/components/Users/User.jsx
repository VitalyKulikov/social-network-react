import React from 'react';
import usersPhoto from './../../assets/image/defaultUsersPhoto.png';
import s from './Users.module.css';
import {NavLink} from 'react-router-dom';

const User = ({user, followingInProgress, unfollow, follow}) => {
  return (
  <div>
    <div>
      <NavLink to={'/profile/' + user.id}>
        <div>
          <img src={user.photoUrl != null ? user.photoUrl : usersPhoto} alt="logo" className={s.userAva}></img>
        </div>
      </NavLink>
      <div>
        {user.followed ?
          (<button disabled={followingInProgress.some((id) => id === user.id)}
                   onClick={() => {
                     unfollow(user.id)
                   }}>
              Unfollow
            </button>
          )
          :
          (<button disabled={followingInProgress.some((id) => id === user.id)}
                   onClick={() => {
                     follow(user.id)
                   }}>
              Follow
            </button>
          )}
      </div>
    </div>
    <div>
      <div>
        <span>{user.name} </span>
        <span> {user.status} </span>
      </div>
    </div>
  </div>
  )
}
export default User;