import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setuser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //Google Sign In Function
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    //Sign Out Function
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setuser({});
            })
    }
    //Get Current User Update
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setuser(user);
            }
        })
    }, [auth]);


    return { user, signInWithGoogle, logOut }

}

export default useFirebase;