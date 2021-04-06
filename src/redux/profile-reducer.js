import { profileAPI } from "../components/api/api";


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';



let initialState = {
    postsData:[
        {id:1, message: 'Hi how are you', likecounts: 12},
        {id:2, message: "It's my first post", likecounts: 31}
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state = initialState, action) => {
        switch (action.type) {
            case ADD_POST:{
                let addText ={
                    id:5,
                    message: action.addText,
                    likecounts:0
                };
                return{
                    ...state,
                    postsData: [...state.postsData, addText],
                    addText: ''
                }
            };
            case SET_USER_PROFILE:
                return {
                    ...state, 
                    profile: action.profile
                };
            case SET_STATUS:
                return{
                    ...state,
                    status: action.status
                }
            default:
                    return state;
        }
}

export const setUserProfile = (profile) =>({type: SET_USER_PROFILE, profile})
export const addPostActionCreator = (addText) =>({type: ADD_POST, addText})
export const setUserStatus = (status) => ({ type: SET_STATUS, status })


export const getProfile = (userId) => (dispatch) =>{
    profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}


export const getStatus = (userId) => (dispatch) =>{
    profileAPI.getStatus(userId).then(response => {
        dispatch(setUserStatus(response.data));
    });
}


export const updateStatus = (status) => (dispatch) =>{
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0){
            dispatch(setUserStatus(status));
        }
    });
}

export default profileReducer;