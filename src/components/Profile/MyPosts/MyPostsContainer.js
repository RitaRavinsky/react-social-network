import { connect } from "react-redux";
import {
  addPostActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => ({ profilePage: state.profilePage });

const mapDispatchToProps = (dispatch) => ({
  onAddNewPost: (text) => {
    dispatch(addPostActionCreator(text));
  },
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
