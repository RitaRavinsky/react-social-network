import Post from "./Post/Post";
import styles from "./MyPosts.module.css";
import NewPostForm from "./NewPostForm";
import React from "react";

const MyPosts = React.memo(({ profilePage, onAddNewPost }) => {
 
  let postComponents = profilePage.posts.map((post) => (
    <Post message={post.message} likeCount={post.likeCount} key={post.id} />
  ));
  return (
    <div className="myPosts">
      <NewPostForm onAddNewPost={onAddNewPost} />

      <h2 className={styles.title + " mt-4 mb-3"}>My Posts</h2>
      {postComponents}
    </div>
  );
});


export default MyPosts;
