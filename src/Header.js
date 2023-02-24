import Login from "./Login";

import { useState, useRef, useEffect } from 'react';

const bookEmojis = [
    '📗',
    '📚',
    '📘',
    '📖'
]

function Header({ user }) {
    const [bookIndex, setBookIndex] = useState(0);
    const intervalId = useRef();

    // getting JUST the first name from the user object 
    const firstName = user ? user.displayName.split(' ')[0] : <Login />;

    const changeBookEmoji = () => {
        let nextBookIndex = bookIndex + 1

        if (nextBookIndex === bookEmojis.length - 1) {
            clearInterval(intervalId.current);
            // nextBookIndex = 0;
        }
        if (!bookEmojis[nextBookIndex]) {
            nextBookIndex = 0;
        }
        setBookIndex(nextBookIndex);
    };

    useEffect(() => {
        intervalId.current = setInterval(changeBookEmoji, 2500);
        return () => clearInterval(intervalId.current);
    }, [changeBookEmoji]);

    return (
        <div>
            <h1>{firstName}'s {bookEmojis[bookIndex]} Look</h1>
        </div>
    )
}

export default Header;