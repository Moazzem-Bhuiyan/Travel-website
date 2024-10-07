

import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import GoogleSignin from '../../Shared/GoogleSignIn/GoogleSignin';

const SignUp = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
        const {createUser}=useContext(AuthContext)
    const onSubmit = data => {
      console.log(data);

      createUser(data.email,data.password)
      .then(result=>{
        console.log(result.user)
        navigate('/')

      })
      .catch(error=>{
        console.log('mama caught' , error)
      })
      
    };

    return (
        <div>
 <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6 text-center">Create Your Account</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input 
              type="text" 
              className={`mt-1 block w-full px-4 bg-white py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm`} 
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input 
              type="email" 
              className={`mt-1 block  bg-white  w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm`} 
              {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input 
              type="password" 
              className={`mt-1 block  bg-white  w-full px-4 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm`} 
              {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
          </div>

          {/* Submit Button */}
          <div>
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Sign Up
            </button>
          </div>
        </form>
     
      <h1 className='text-center mt-5'>Already Have Account ?<Link to ='/signin'> <span className='text-blue-500'>Please Login</span></Link></h1>

      <GoogleSignin></GoogleSignin>

      </div>
    </div>
            
        </div>
    );
};

export default SignUp;