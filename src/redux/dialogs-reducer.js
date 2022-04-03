const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messages: [
    { id: "1", message: "Hi!" },
    { id: "2", message: "What's up?" },
    { id: "3", message: "<3" },
  ],
  dialogs: [
    { contactId: "1", contactName: "Daniel" },
    { contactId: "2", contactName: "Eitan" },
    { contactId: "3", contactName: "Iris" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {

    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          { id: 10, message: action.newMessageBody },
        ],
      };

    default:
      return state;
  }
};

//action creators
export const sendMessageActionCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});


export default dialogsReducer;
