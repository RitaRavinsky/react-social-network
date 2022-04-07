import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {
  const {
    users,
    totalUsersCount,
    pageSize,
    currentPage,
    handlePageChange,
    followingInProgress,
    followThunkCreator,
    unfollowThunkCreator,
  } = props;

let userComponents = users.map((user) => (
  <User
    user={user}
    followingInProgress={followingInProgress}
    followThunkCreator={followThunkCreator}
    unfollowThunkCreator={unfollowThunkCreator}
    key={user.id}
  />
));
  return (
    <section className="usersWrapper">
      <h2 className="mb-4">Find Friends</h2>
      {userComponents && userComponents}

      <Paginator
        handlePageChange={handlePageChange}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        portionSize="15"
      />
    </section>
  );
};

export default Users;
