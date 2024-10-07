import React, { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const GoogleSignin = () => {

    const navigate = useNavigate()

    const {GoogleLogin}=useContext(AuthContext)

    const handleGoogleLogin = ()=>{

        GoogleLogin()
        .then(result=>{
            console.log(result.user)
            navigate('/')
        })
        .catch(error =>{
            console.log('hoynai',error)
        })




    }


    return (



        <div className='flex justify-center'>

            <button onClick={handleGoogleLogin} className='border-2 border-blue-500 w-full py-1 mt-2 btn bg-white text-black hover:bg-red-400 hover:text-white'>Signin With Your Google</button>
            
        </div>
    );
};

export default GoogleSignin;