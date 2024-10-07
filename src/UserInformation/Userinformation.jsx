import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider/AuthProvider';

import { FaUser } from 'react-icons/fa';

const Userinformation = () => {

    const {user}=useContext(AuthContext)
    return (
        <div>

         {
           user && user.photoURL ? <div className='flex justify-center my-20'>  <img src={user.photoURL} alt="" /></div> 
           : <div  className='flex justify-center my-20'> <FaUser className='text-6xl'></FaUser> </div>
         }
         
         
           </div>
    );
};

export default Userinformation;