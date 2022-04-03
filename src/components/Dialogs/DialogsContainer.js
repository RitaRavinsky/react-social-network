import { connect } from "react-redux";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import {
  sendMessageActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => ({ dialogsPage: state.dialogsPage });


const mapDispatchToProps = (dispatch) => ({

  onAddNewMessage: (text) => {
    dispatch(sendMessageActionCreator(text));
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


