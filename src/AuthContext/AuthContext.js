import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

export const AuthProvider = createContext()

const auth = getAuth(app)

const AuthContext = ({ children }) => {

    const [user, setUser] = useState('')

    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userProfile = profile => {
        return updateProfile(auth.currentUser, profile)
    }

    const logIn = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedInUser => {
            setUser(loggedInUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const logOut = () => {
        return signOut(auth)
    }

    const allValue = { createUser, user, userProfile, logOut, logIn, loading }
    return (
        <AuthProvider.Provider value={allValue}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;