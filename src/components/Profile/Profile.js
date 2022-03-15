import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) =>  {
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

