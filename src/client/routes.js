import React from 'react';
import HomePage from './pages/home-page';
import UserPage from './pages/user-page';

export default[
  {
    path: '/',
    ...HomePage,
    exact: true
  },
  {
    path:'/users',
    ...UserPage
  }
]