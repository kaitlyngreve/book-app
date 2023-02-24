

function BookCard({ book }) {
    let bookV = book.volumeInfo;

    console.log(bookV.imageLinks)
    return (
        <div>
            <p>Title: {bookV.title}</p>
            <p>Author: {bookV.authors}</p>
        </div>
    )
}

export default BookCard;