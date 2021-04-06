import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }
    return (
    <div>
        <div className={s.header__content}>
            <img src='https://webneel.com/wallpaper/sites/default/files/images/08-2013/18-sea-ocean-wave-beach-sand-wallpaper.preview.jpg'/>
        </div>
        <div className={s.about__profile}>
            <img src={props.profile.photos.large}/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
      </div>
      );
}
/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ89YogNaVeT9EfXVueDSUf9Bgh1H12NDgkrQ&usqp=CAU */

export default ProfileInfo;