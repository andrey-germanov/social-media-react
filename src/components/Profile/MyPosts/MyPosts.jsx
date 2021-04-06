import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => { 
    let posts = props.postsData.map (p => <Post message={p.message} like={p.likecounts}/>);

    let onAddPost = (value) => {
        props.addPost(value.addText);
        value.addText = ''
    }
    return (
    <div className={s.content}>
        <div className={s.add__posts}>
            <span>My posts</span>
            <div className={s.content__post}>
               <PostFormRedux onSubmit={onAddPost}/>
            </div>
        </div>
        {posts}
    </div>
        );
}

const addNewPost = (props) => {
    return(
      <form onSubmit={props.handleSubmit}>
            <Field placeholder={"write post..."} component="textarea" name="addText"/>
            <button>Add post</button>
      </form>
    )
}

const PostFormRedux = reduxForm({form: "addNewPostText"})(addNewPost)


export default MyPosts;