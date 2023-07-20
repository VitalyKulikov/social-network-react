import React from 'react';
import Paginator from '../common/pagination/Paginator';
import User from './User';

let Users = ({currentPage, totalCount, pageSize, onPageChenged, users, ...props}) => {

  return (
    <div>
      <div>
        <Paginator currentPage={currentPage} pageSize={pageSize}
                   totalItemsCount={totalCount} onPageChenged={onPageChenged}/>
      </div>
      <div>
        {
          users.map((u) => <User user={u}
                                 followingInProgress={props.followingInProgress}
                                 follow={props.follow} unfollow={props.unfollow}
                                 key={u.id}/>
          )
        }
      </div>
    </div>
  )
}

export default Users;
