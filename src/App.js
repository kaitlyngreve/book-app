import './App.css';
import Login from './Login';
import SignOut from './SignOut';
import Header from './Header';

import { useState, useEffect } from 'react';
import { auth } from './firebase-config'
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {user ?
        <div>
          <Header
            user={user}
          />
          <SignOut />
        </div>
        :
        <Login />
      }
    </div>
  );
}

export default App;
