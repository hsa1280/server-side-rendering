import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home';
import UserList from './components/user-list';

export default () => {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/users' component={UserList} />
    </div>
  )
}