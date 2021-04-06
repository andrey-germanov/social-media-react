import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) =>{
    return{
        postsData  : state.profilePage.postsData,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        addPost: (addText) =>{
            dispatch(addPostActionCreator(addText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;