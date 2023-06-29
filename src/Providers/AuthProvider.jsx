import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext= createContext(null)
const auth= getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider= new GoogleAuthProvider()

    useEffect(()=> {
        const unsubscribe= onAuthStateChanged(auth, currentUser=> {
            console.log('Current user is', currentUser)
            setUser(currentUser)
            //get and set token

            if(currentUser){
                axios.post('https://bistro-boss-server-bakhtiar2000.vercel.app/jwt', {email: currentUser.email})
                .then(data=> {
                    console.log(data.data.token)
                    localStorage.setItem('access-token', data?.data?.token)
                    setLoading(false)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
           
        })
        return()=>{
            return unsubscribe();
        }
    }, [])

    const createUser= (email, password)=> {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn= (email, password)=> {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut= ()=> {
        return signOut(auth)
    }

    const updateUserProfile= (name, photo) => {
        return updateProfile(auth.currentUser,{
            displayName: name, photoURL: photo
        } )
    }

    const authInfo= {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;