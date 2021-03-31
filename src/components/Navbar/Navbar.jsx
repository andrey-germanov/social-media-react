import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';
import SideBar from './SideBar/SideBar';

const Navbar = (props) => {
    return <nav className={s.nav}>
            <div className={s.items}>
              <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
              <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
              <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
              <NavLink to="/news" activeClassName={s.active}>News</NavLink>
              <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
              <NavLink to="/settings" activeClassName={s.active} >Settings</NavLink>
            </div>
            <div className={s.items}>
                <NavLink to="#">Exit</NavLink>
            </div>
            {/* <SideBar store={props.store.getState().sideBar}/> */}
      </nav>
}

export default Navbar;
