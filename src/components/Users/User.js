import styles from "./UserItem.module.css";
import { Row, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const User = ({
  user,
  followingInProgress,
  followThunkCreator,
  unfollowThunkCreator,
}) => {
  return (
    <div className={styles.userItem + " px-3 py-3 mb-3"}>
      <Row>
        <Col className="d-flex">
          <NavLink to={`/profile/${user.id}`}>
            <img
              className={styles.userPic}
              src={
                user.photos.small != null
                  ? user.photos.small
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
              disabled={followingInProgress.some((id) => id === user.id)}
              variant="outline-dark"
              className="dblock ml-auto"
              onClick={() => {
                unfollowThunkCreator(user.id);
              }}
            >
              Unfollow
            </Button>
          )}
          {!user.followed && (
            <Button
              disabled={followingInProgress.some((id) => id === user.id)}
              variant="dark"
              onClick={() => {
                followThunkCreator(user.id);
              }}
            >
              Follow
            </Button>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default User;
