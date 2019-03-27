import React from 'react';

const Home = () => {
  return <div>
    <div>I am the Home component Shian</div>
    <button onClick={() => console.log('press me')}>Click Me</button>
  </div>
}

export default {
  component: Home
}