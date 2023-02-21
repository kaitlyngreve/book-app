import BookCard from "./BookCard";
import SearchBooks from "./SearchBooks";

function Books({ books, searchBooks, handleSearchBooks }) {
    console.log(books)
    return (
        <div>
            <SearchBooks searchBooks={searchBooks} handleSearchBooks={handleSearchBooks} />
            {books.length === 0 ? <p>sorry ... no results match</p> :
                <div>
                    {books.map((book) => {
                        return <BookCard book={book} key={book.id} />
                    })}
                </div>
            }
        </div>
    )
}

export default Books;