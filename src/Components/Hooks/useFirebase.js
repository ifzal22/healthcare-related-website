import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebaseApp from "../Firebase/Firebase.innt";
initializeFirebaseApp();
const useFirebaseApp = () => {




    const auth = getAuth();
    const provider = new GoogleAuthProvider();


    const [user, setUser] = useState({});
    const [error, setError] = useState("");



    const LogingWidthGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.massage)
            })
    }



    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user);
                console.log(user)

            } else {
                setError("");
            }
        });

    }, []);

    const handelLOgOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError('');
        });
    }


    return { LogingWidthGoogle, user, error, handelLOgOut };
}
export default useFirebaseApp;