import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState,} from "react";
import auth from "../../../public/Firebase/firebase";




 export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const provider = new GoogleAuthProvider();
    const [user,SetUser]=useState(null);
    const [loading,setLoading]=useState(true);


    const createUser = (email,password)=>{

            setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    };
    const SignIn = (email,password)=>{

        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const GoogleLogin = ()=>{

        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const Logout = ()=>{
        setLoading(true)
        return signOut(auth)
    }







    useEffect(()=>{

        const unSubscribe = onAuthStateChanged(auth,curentUser=>{

            console.log('current user ', curentUser)
            SetUser(curentUser)
            setLoading(false)
        })

        return()=>{
            unSubscribe();
        }

    },[])
    

    const authinfo = {
        user,
        loading,
        createUser,
        SignIn,
        GoogleLogin,
        Logout
    }


    return (

        <AuthContext.Provider value={authinfo}>

            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;