import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./ProfileInfo.module.css"

const ProfileInfo = () => {
  return (
    <Row className={styles.userInfo + " py-4"}>
      <Col className={styles.userPic}>
        <img src="https://picsum.photos/120/100" alt="" />
      </Col>
      <Col md={10}>
        <h1>Rita Ravinsky</h1>
        <ul>
          <li>
            <span>City:</span> Haifa
          </li>
          <li>
            <span>Email:</span> ritaravinsky@gmail
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default ProfileInfo;
