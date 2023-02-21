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
  const [searchBooks, setSearchBooks] = useState("");

  useEffect(() => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=search+terms&printType=books&maxResults=40')
      .then((r) => r.json())
      .then((data) => setBooks(data.items))
  }, []);

  const handleSearchBooks = (e) => {
    setSearchBooks(e.target.value)
  }

  let booksToDisplay = books.filter((book) => {
    return book.volumeInfo.title.toLowerCase().includes(searchBooks.toLowerCase())
  })

  return (
    <div className="App">
      {user ?
        <div>
          <Header
            user={user}
          />
          <SignOut />
          <Books
            books={booksToDisplay}
            searchBooks={searchBooks}
            handleSearchBooks={handleSearchBooks}
          />
        </div>
        :
        <Login />
      }
    </div>
  );
}

export default App;
