import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebaseApp from "../Firebase/Firebase.innt";
initializeFirebaseApp();
const useFirebaseApp = () => {




    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const [name, setName] = useState('');
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [toggle, setToggle] = useState(false);


    // Google propap sign in
    const LogingWidthGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.massage)
            })
    }

    const Handeltoggle = () => {
        setToggle(false);
    }






    const HandelEmailChang = (e) => {
        setEmail(e.target.value)
    }

    const HandelPasswordChang = (e) => {
        if (e.target.value.length < 6) {
            setError("password must need to be at least 6 characters");
            return;
        } else {
            setPassword(e.target.value);
            setError('')
        }


        setPassword(e.target.value)

    }
    // REGISTER
    const handelREgister = (e) => {

        e.preventDefault();
        console.log(email, password)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
               
                setUserName();
               
            })
            .catch((error) => {
                console.log(error.massage)
            })
    }

    // name
    const handleName = (e) => {
        setName(e.target.value)
    }

    // login
    // Email&Password
    const handelWithEmailAndPassword = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 

                setUser(result.user);
                console.log(result.user)
                setError('');
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }


    // Varification

/*     const verifayEmail = (email) => {
        sendEmailVerification(auth, email)
            .then(() => {
                // Email verification sent!
                // ...
            });

    } */


    // HandelReset
    const handelReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
              /*   const errorCode = error.code;
                const errorMessage = error.message; */
                // ..
            });
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => {

            }).catch((error) => {
                setError(error.message)
            });
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


    return { LogingWidthGoogle, 
        user,
         error,
          handelLOgOut,
           HandelEmailChang,
            HandelPasswordChang,
            email,
             password, 
             name,
              handelREgister,
              
              Handeltoggle, 
              toggle,
               handelWithEmailAndPassword, 
               handelReset,
                handleName };
}
export default useFirebaseApp;