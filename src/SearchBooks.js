

function SearchBooks({ searchBooks, handleSearchBooks }) {

    return (
        <div>
            <label htmlFor="search">Find Book:</label>
            <input
                type='text'
                placeholder="type here to search for book..."
                value={searchBooks}
                onChange={handleSearchBooks}
            />
        </div>
    )
}

export default SearchBooks;