import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';

import './App.css';




const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app__wrapper'>
        <HeaderContainer />
        <Route render={ () => <Navbar store={props.store}/>}/>
          <div className='app__wrapper-content'> 
            <Route path='/profile/:userId?' render={ () => <ProfileContainer />}/>
            <Route path='/users' render={ () => <UsersContainer />}/>
            <Route path='/dialogs' render={ () => <DialogsContainer/>}/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
            <Route path='/login' render={ () => <Login />}/>
          </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
