const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postsData:[
        {id:1, message: 'Hi how are you', likecounts: 12},
        {id:2, message: "It's my first post", likecounts: 31}
    ],
    newPostText: '',
    profile: null
}

export const profileReducer = (state = initialState, action) => {
        switch (action.type) {
            case UPDATE_NEW_POST_TEXT:{
                return{
                    ...state,
                    newPostText: action.newText
                }
            };
            case ADD_POST:{
                let newPost ={
                    id:5,
                    message: state.newPostText,
                    likecounts:0
                };
                return{
                    ...state,
                    postsData: [...state.postsData,newPost],
                    newPostText: ''
                }
            };
            case SET_USER_PROFILE:{
                return {
                    ...state, 
                    profile: action.profile
                }
            };
            default:
                    return state;
        }
    return state;
}

export const setUserProfile = (profile) =>({type: SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = (text) =>({type: UPDATE_NEW_POST_TEXT, newText: text })
export const addPostActionCreator = () =>({type: ADD_POST})

export default profileReducer;