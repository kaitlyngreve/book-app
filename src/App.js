import './App.css';
import Login from './Login';
import SignOut from './SignOut';
import Header from './Header';
import Books from './Books';

import { useState, useEffect } from 'react';
import { auth } from './firebase-config'
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyCGf2jZ6SCALz72CmivUbSCHan9f1C_9d4')
      .then((r) => r.json())
      .then((data) => setBooks(data.items))
  }, []);


  return (
    <div className="App">
      {user ?
        <div>
          <Header
            user={user}
          />
          <SignOut />
          <Books
            books={books}
          />
        </div>
        :
        <Login />
      }
    </div>
  );
}

export default App;
