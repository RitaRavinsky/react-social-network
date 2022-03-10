import { connect } from "react-redux";
import {
  updateNewMessageBodyActionCreator,
  sendMessageActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => ({ dialogsPage: state.dialogsPage });


const mapDispatchToProps = (dispatch) => ({
  onMessageInput: (text) => {
    dispatch(updateNewMessageBodyActionCreator(text));
  },
  onAddNewMessage: () => {
    dispatch(sendMessageActionCreator());
  },
});
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;


