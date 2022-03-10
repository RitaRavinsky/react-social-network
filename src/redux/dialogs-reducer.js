const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.newBody,
      };

    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          { id: 10, message: state.newMessageBody },
        ],
        newMessageBody: "",
      };

    default:
      return state;
  }
};

//action creators
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyActionCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  newBody: body,
});

export default dialogsReducer;
