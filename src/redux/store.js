import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: "1", message: "Hi guys!", likeCount: 18 },
        { id: "2", message: "Fisrt Post Ever!", likeCount: 33 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      messages: [
        { id: "1", message: "Hi!" },
        { id: "2", message: "What's up?" },
        { id: "3", message: "<3" },
      ],
      newMessageBody: "",
      dialogs: [
        { contactId: "1", contactName: "Daniel" },
        { contactId: "2", contactName: "Eitan" },
        { contactId: "3", contactName: "Iris" },
      ],
    },
  },
  _callSubscriber() {
    console.log("state changed.");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    // change state through reducers
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    // change UI
    this._callSubscriber(this._state);
  },
};



export default store;
window.store = store;
