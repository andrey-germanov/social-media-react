const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs:[
        {id:1, name: 'Dima'},
        {id:2, name: 'Sasha'},
        {id:3, name: 'Masha'},
        {id:4, name: 'Ilya'},
        {id:5, name: 'Misha'}
    ],
    messages:[
        
    ],
    newMessageBody: ''
}


export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
                return {
                    ...state,
                    newMessageBody: action.body
                }
        case SEND_MESSAGE:
                let body = state.newMessageBody;
                return {
                    ...state,
                    newMessageBody: '',
                    messages:[...state.messages, {id:3, message: body}]
                };
        default:
            return state;
    }
}

export const sendMessageCreator = () =>({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>({type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;