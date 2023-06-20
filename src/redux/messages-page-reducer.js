const SEND_MESSAGE = "SEND_MESSAGE"

let initialState = { 
  dialogsData: [
    { id: "1", name: "Mihail" },
    { id: "2", name: "Andrey" },
    { id: "3", name: "Alex" },
    { id: "4", name: "Victor" },
    { id: "5", name: "Ivan" },
    { id: "6", name: "Roman" },
    { id: "7", name: "Nikolai" },
    { id: "8", name: "Nadezhda" }
  ],

  messagesData: [
    { id: "1", message: "Hello" },
  ],
}

const messagesPageReducer =  (state = initialState, action) => {

  switch (action.type) {
  case SEND_MESSAGE:
    return {
      ...state,
      messagesData: [...state.messagesData, { id: "1", message: action.newMessageText}]
    }
  default:
    return state;
  }
}

export const sendMessageCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText});

 
export default messagesPageReducer;
 