import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => { 
let posts = props.postsData.map (p => <Post message={p.message} like={p.likecounts}/>);
let newPostElement = React.createRef();

let onAddPost = () => {
    props.addPost();
}
let onPostChange = () =>{
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
}
    return (
    <div className={s.content}>
        <div className={s.add__posts}>
            <span>My posts</span>
            <div className={s.content__post}>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                <button onClick={onAddPost}>Add post</button>
            </div>
        </div>
        {posts}
    </div>
        );
}

export default MyPosts;