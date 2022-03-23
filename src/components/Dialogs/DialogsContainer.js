import { connect } from "react-redux";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
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

// const AuthRedirectComponent = WithAuthRedirect(Dialogs);
// const DialogsContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AuthRedirectComponent);



export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Dialogs);


