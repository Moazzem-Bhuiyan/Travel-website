import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Routes/Routes';
import AuthProvider from './Auth/AuthProvider/AuthProvider';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-6xl m-auto shadow-xl'>
      
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    

    </div>
     
  </StrictMode>,
)
