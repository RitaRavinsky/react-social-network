import * as axios from "axios";
import { Row, Col, Button } from "react-bootstrap";
import styles from "./UserItem.module.css";

const Users = ({ users, onUnfollow, onFollow, onSetUsers }) => {
  if (users.length === 0) {
    // debugger;
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((res) => {
        onSetUsers(res.data.items);
        console.log(res);
      });
    // debugger;
  }
  return (
    <section className="usersWrapper">
      <h2 className="mb-4">Find Friends</h2>
      {users.map((user) => (
        <div className={styles.userItem + " px-3 py-3 mb-3"} key={user.id}>
          <Row>
            <Col className="d-flex">
              <img
                className={styles.userPic}
                src={
                  user.photos.small != null ? user.phono.small :
                  "https://picsum.photos/" + Math.floor(Math.random() * 100) + 5
                }
                alt=""
              />

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
    </section>
  );
};

export default Users;
