

function BookCard({ book }) {
    let bookV = book.volumeInfo;

    return (
        <div>
            <p>Title: {bookV.title}</p>
            <p>Author: {bookV.authors}</p>
            <img src={bookV.imageLinks.thumbnail} />
        </div>
    )
}

export default BookCard;