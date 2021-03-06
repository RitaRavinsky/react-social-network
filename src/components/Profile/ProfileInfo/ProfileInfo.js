import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  saveAvatar,
}) => {
  if (!profile) {
    return <Preloader />;
  }
  const handleFileUpload = (e) => {
    if (e.target.files.length) {
      saveAvatar(e.target.files[0]);
    }
  };
  return (
    <Row className={styles.userInfo + " py-4"}>
      <Col className={styles.userPic} md="2">
        <img
          src={
            profile.photos.large
              ? profile.photos.large
              : "https://picsum.photos/120/100"
          }
          alt=""
        />
      </Col>
      <Col md={10}>
        <h1>{profile.fullName}</h1>
        <ProfileStatus
          updateStatus={updateStatus}
          status={status}
          profile={profile}
        />

        <div className={styles.profileContacts}>
          {profile.contacts.github && (
            <a target="blank" href={profile.contacts.github}>
              <i className="fa-brands fa-github"></i>
            </a>
          )}
          {profile.contacts.vk && (
            <a target="blank" href={profile.contacts.vk}>
              <i className="fa-brands fa-vk"></i>
            </a>
          )}
          {profile.contacts.facebook && (
            <a target="blank" href={profile.contacts.facebook}>
              <i className="fa-brands fa-facebook"></i>
            </a>
          )}
          {profile.contacts.instagram && (
            <a target="blank" href={profile.contacts.instagram}>
              <i className="fa-brands fa-instagram"></i>
            </a>
          )}
          {profile.contacts.twitter && (
            <a target="blank" href={profile.contacts.twitter}>
              <i className="fa-brands fa-twitter"></i>
            </a>
          )}
          {profile.contacts.youtube && (
            <a target="blank" href={profile.contacts.youtube}>
              <i className="fa-brands fa-youtube"></i>
            </a>
          )}
          {profile.contacts.website && (
            <a target="blank" href={profile.contacts.website}>
              <i className="fa-solid fa-globe"></i>
            </a>
          )}
        </div>
      </Col>
      <Col md="12">
        {isOwner && (
          <div>
            <input type="file" onChange={handleFileUpload} />
          </div>
        )}
        {!isOwner && (
          <Button variant="outline-dark" className="dblock ml-auto">
            Unfollow
          </Button>
        )}
      </Col>
    </Row>
  );
};

export default ProfileInfo;
