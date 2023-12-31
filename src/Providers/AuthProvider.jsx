import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()

    const createUser =(email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
  }

    const updateUser = (value) =>{
        return updateProfile(auth.currentUser, value);

    }
    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword (auth,email,password);
  }
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
  }
   
    

    useEffect (() => {
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
              console.log('user in the auth state changed',currentUser);
              setUser (currentUser);
              setLoading(false);
        });
        return() => {
              unSubscribe();
        }
  },[])

    const authInfo = {
        user,
        loading,
        createUser,
        updateUser,
        signIn,
        signInWithGoogle,
        logOut,
        
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


