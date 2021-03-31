import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return <div className={s.item}>
        <div className={s.post}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ89YogNaVeT9EfXVueDSUf9Bgh1H12NDgkrQ&usqp=CAU"/>
            {props.message}
            <div>
                <span>{'like ' + props.like}</span>
            </div>
        </div>
        
        </div>
}


export default Post;