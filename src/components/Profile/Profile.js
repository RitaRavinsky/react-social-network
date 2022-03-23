import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { Navigate } from "react-router-dom";

const Profile = (props) =>  {
  if(!props.isAuth){
    return <Navigate to="/login" />
  }
  return (
    <section className="profileContent">
      <div
        className={styles.hero}
        style={{
          backgroundImage: "url(https://picsum.photos/1000/200)",
        }}
      ></div>
      <ProfileInfo {...props} />
      <MyPostsContainer />
    </section>
  );
};

export default Profile;

