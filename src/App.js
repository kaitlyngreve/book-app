import './App.css';
import Login from './Login';
import SignOut from './SignOut';

import { auth } from './firebase-config'
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);

  // getting JUST the first name from the user object 
  const firstName = user.displayName.split(' ')[0];

  return (
    <div className="App">
      {user ?
        <div>
          <h1>{firstName}'s Book Look</h1>
          <SignOut />
        </div>
        :
        <Login />
      }
    </div>
  );
}

export default App;
