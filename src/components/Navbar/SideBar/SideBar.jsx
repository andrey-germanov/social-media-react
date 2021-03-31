import React from 'react';
import Friends from './Friends/Friends';
import s from './SideBar.module.css';


const SideBar = (props) => {
    let friends = props.store.friends.map (f => <Friends name={f.name} image={f.image}/>);


    return (
        <div className={s.sidebar}>
            <h3>Friends</h3>
            <div className={s.friends}>
                {friends}
            </div>
        </div>
            
    )
}



export default SideBar;