import React, { createContext } from 'react';
import useFirebaseApp from '../Hooks/useFirebase';


export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    // const {children} = props;
    const allContext = useFirebaseApp()
    return (
       
        <AuthContext.Provider value={allContext}>

            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;