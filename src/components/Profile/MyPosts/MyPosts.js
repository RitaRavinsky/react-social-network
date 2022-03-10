import React from "react";
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const MyPosts = ({ profilePage, onAddNewPost, onTextChange }) => {
  let newPostElement = React.createRef();

  const handleAddNewPost = () => {
    onAddNewPost();
  };

  const handleTextChange = () => {
    let text = newPostElement.current.value;
    onTextChange(text);
  };

  let postComponents = profilePage.posts.map((post) => (
    <Post message={post.message} likeCount={post.likeCount} key={post.id} />
  ));

  return (
    <div className="myPosts">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>New Post</Form.Label>
          <Form.Control
            ref={newPostElement}
            as="textarea"
            rows={3}
            onChange={handleTextChange}
            value={profilePage.newPostText}
          />
        </Form.Group>
        <Button variant="dark" onClick={handleAddNewPost}>
          Send
        </Button>
      </Form>
      <h2 className={styles.title + " mt-4 mb-3"}>My Posts</h2>
      {postComponents}
    </div>
  );
};

export default MyPosts;
