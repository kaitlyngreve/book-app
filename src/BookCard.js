

function BookCard({ book }) {
    let bookV = book.volumeInfo


    return (
        <div>
            <p>{bookV.title}</p>
        </div>
    )
}

export default BookCard;