import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => ({ profilePage: state.profilePage });

const mapDispatchToProps = (dispatch) => ({
  onAddNewPost: () => {
    dispatch(addPostActionCreator());
  },
  onTextChange: (text) => {
    dispatch(updateNewPostTextActionCreator(text));
  },
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
