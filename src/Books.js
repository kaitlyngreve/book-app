import BookCard from "./BookCard";

function Books({ books }) {

    return (
        <div>
            {books.map((book) => {
                return <BookCard book={book} key={book.id} />
            })}
        </div>
    )
}

export default Books;