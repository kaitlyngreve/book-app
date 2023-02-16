import { auth } from "./firebase-config";


function SignOut() {

    const signUserOut = () => {
        auth.signOut();
    }

    return (
        <div>
            <button onClick={signUserOut}>Sign Out</button>
        </div>
    )
}

export default SignOut;