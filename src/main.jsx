import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Routes/Routes';
import AuthProvider from './Auth/AuthProvider/AuthProvider';

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-6xl m-auto shadow-xl'>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </QueryClientProvider>


  
    

    </div>
     
  </StrictMode>,
)
