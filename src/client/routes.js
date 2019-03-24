import React from 'react';
import Home from './components/home';
import UserList, { loadData } from './components/user-list';

export default[
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path:'/users',
    loadData,
    component: UserList
  }
]