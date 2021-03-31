import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
  
    let welcome = 'Вы зашли как: ' + props.login;

    return <div className={s.header}>
          <img src='https://cdn.logo.com/hotlink-ok/logo-social-sq.png'/>
          <div className={s.singIn}>
            {props.isAuth ? welcome : <NavLink to={'/login'}>Login</NavLink>} 
          </div>
      </div>
}

export default Header;