import BookCard from "./BookCard";
import SearchBooks from "./SearchBooks";

function Books({ books, searchBooks, handleSearchBooks, setBooksByQuery }) {

    return (
        <div>
            <SearchBooks setBooksByQuery={setBooksByQuery} searchBooks={searchBooks} handleSearchBooks={handleSearchBooks} />
            <div className='book-card-container'>
                {books.map((book) => {
                    return <BookCard book={book} key={book.id} />
                })}
            </div>
        </div>
    )
}

export default Books;