import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./UserItem.module.css";

const User = ({
  users,
  onUnfollow,
  onFollow,
  totalUsersCount,
  pageSize,
  currentPage,
  handlePageChange,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    if (pages.length < 10) {
      pages.push(i);
    }
  }
  return (
    <section className="usersWrapper">
      <h2 className="mb-4">Find Friends</h2>
      {users.map((user) => (
        <div className={styles.userItem + " px-3 py-3 mb-3"} key={user.id}>
          <Row>
            <Col className="d-flex">
              <NavLink to={`/profile/${user.id}`} >
              <img
                className={styles.userPic}
                src={
                  user.photos.small != null
                    ? user.phono.small
                    : "https://picsum.photos/" +
                      Math.floor(Math.random() * 100) +
                      5
                }
                alt="userpic"
              />
              </NavLink>

              <div className="status-wrap">
                <h3>{user.name}</h3>
                {user.status}
              </div>
            </Col>
            <Col md={3} className="my-auto ml-auto d-flex flex-row-reverse">
              {user.followed && (
                <Button
                  variant="outline-dark"
                  className="dblock ml-auto"
                  onClick={() => onUnfollow(user.id)}
                >
                  Unfollow
                </Button>
              )}
              {!user.followed && (
                <Button variant="dark" onClick={() => onFollow(user.id)}>
                  Follow
                </Button>
              )}
            </Col>
          </Row>
        </div>
      ))}

      <ul className={styles.pagination}>
        {pages.map((p) => (
          <li
            onClick={() => handlePageChange(p)}
            className={currentPage === p ? styles.current : ""}
            key={p}
          >
            {p}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default User;
