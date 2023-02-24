import { useState } from 'react';

function SearchBooks({ searchBooks, handleSearchBooks, setBooksByQuery }) {

    return (
        <div>
            <label>Find Book:</label>
            <form onSubmit={setBooksByQuery}>
                <input
                    type='text'
                    placeholder="type here to search for book..."
                    value={searchBooks}
                    onChange={handleSearchBooks}
                    name="searchInput"
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBooks;