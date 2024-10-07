import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { h1 } from 'framer-motion/client';
import { Navigate } from 'react-router-dom';

const PrivateAuth = ({children}) => {

    const {user,loading}=useContext(AuthContext)

    if(loading){

        return <h1 className='text-center'>Loading........</h1>

    }

    if(user){

        return children
    }

    return(
        <Navigate to ='/signup'></Navigate>
    )
   
};

export default PrivateAuth;