import './App.css';
import Login from './Login';
import SignOut from './SignOut';

import { auth } from './firebase-config'
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);

  console.log(user);

  return (
    <div className="App">
      {user ?
        <div>
          <h1>The Book Look</h1>
          <SignOut />
        </div>
        :
        <Login />
      }
    </div>
  );
}

export default App;
