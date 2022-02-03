import React from 'react';
import ChangeColour from './components/ChangeColour';
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {
  return ( 
    <div>
      <Login />
      <Profile />
      <ChangeColour />
    </div>
  )
};

export default App;
