import './App.css';
import Login from './Login';
import SignOut from './SignOut';
import Header from './Header';
import Books from './Books';

import { useState, useEffect } from 'react';
import { auth } from './firebase-config';
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);
  const [books, setBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState("");

  const handleSearchBooks = (e) => {
    setSearchBooks(e.target.value)
  }

  let booksToDisplay = books.filter((book) => {
    return book.volumeInfo.title.toLowerCase().includes(searchBooks.toLowerCase())
  })

  const setBooksByQuery = (e) => {
    e.preventDefault();

    const searchQuery = e.target.searchInput.value;
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&printType=books`)
      .then((r) => r.json())
      .then((data) => setBooks(data.items))

    setSearchBooks("");
  };


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
            setBooksByQuery={setBooksByQuery}
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
