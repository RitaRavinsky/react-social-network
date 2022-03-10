import { Row, Col, Button } from "react-bootstrap";
import styles from "./UserItem.module.css";

const Users = ({ users, onUnfollow, onFollow }) => {
  return (
    <section className="usersWrapper">
      <h2 className="mb-4">Find Friends</h2>
      {users.map((user) => (
        <div className={styles.userItem + " px-3 py-3 mb-3"} key={user.id}>
          <Row>
            <Col className="d-flex">
              <img className={styles.userPic} src={user.userPic} alt="" />

              <div className="status-wrap">
                <h3>{user.fullname}</h3>
                {user.status}
              </div>
            </Col>
            <Col md={3} className="my-auto ml-auto d-flex flex-row-reverse">
              {user.isFollowing && (
                <Button
                  variant="outline-dark"
                  className="dblock ml-auto"
                  onClick={() => onUnfollow(user.id)}
                >
                  Unfollow
                </Button>
              )}
              {!user.isFollowing && (
                <Button variant="dark" onClick={() => onFollow(user.id)}>
                  Follow
                </Button>
              )}
            </Col>
          </Row>
        </div>
      ))}
    </section>
  );
};

export default Users;
