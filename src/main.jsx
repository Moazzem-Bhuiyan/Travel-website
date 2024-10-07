import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Routes/Routes';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-6xl m-auto shadow-xl'>
    <RouterProvider router={router} />
    </div>
     
  </StrictMode>,
)
