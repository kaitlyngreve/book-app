import Login from "./Login";

function Header({ user }) {

    // getting JUST the first name from the user object 
    const firstName = user ? user.displayName.split(' ')[0] : <Login />;

    return (
        <div>
            <h1>{firstName}'s Book Look</h1>
        </div>
    )
}

export default Header;