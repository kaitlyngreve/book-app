import { useState } from 'react';

function SearchBooks({ searchBooks, handleSearchBooks, setBooksByQuery }) {

    return (
        <div>
            <form onSubmit={setBooksByQuery}>
                <input
                    type='text'
                    placeholder="Search by title..."
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