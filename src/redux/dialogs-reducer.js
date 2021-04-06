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
        
    ]
}


export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
                let body = action.newMessageBody;
                return {
                    ...state,
                    messages:[...state.messages, {id:3, message: body}],
                };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) =>({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;