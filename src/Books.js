import BookCard from "./BookCard";
import SearchBooks from "./SearchBooks";

function Books({ books, searchBooks, handleSearchBooks }) {

    return (
        <div>
            <SearchBooks searchBooks={searchBooks} handleSearchBooks={handleSearchBooks} />
            {books.map((book) => {
                return <BookCard book={book} key={book.id} />
            })}
        </div>
    )
}

export default Books;